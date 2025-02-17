import { useEffect, useState, useContext } from "react";
import { Link, useSearchParams } from "react-router";
import { getFlights } from "../../api/flight/flight";
import Flight from "./components/Flight";
import { FlightsContext } from "../../Context";


const SearchModule = () => {
    const [params] = useSearchParams()
    const [items, setItems] = useState({})
    const {
        setPassengerCount,
        selectedFlights,
        addSelectedFlightFrom,
        deleteSelectedFlightFrom,
        addSelectedFlightBack,
        deleteSelectedFlightBack
    } = useContext(FlightsContext);

    console.log(selectedFlights);

    useEffect(() => {
        if (params) {
            const searchFrom = params.get('from');
            const searchTo = params.get('to');
            const date1 = params.get('date1');
            const date2 = params.get('date2');
            const passengers = params.get('passengers');
            getFlights(searchFrom, searchTo, date1, date2, passengers || 1).then((response) => {
                setItems(response.data);
                setPassengerCount(passengers || 1);
            })
        }
    }, [params])

    return (
        <div className="container">
            <section className="mt-5">
                <div className="d-flex justify-content-between align-items-start">
                    <h2 className="mb-4">Из {params.get("from")} в {params.get("to")}.</h2>
                </div>
                {items?.flightsTo?.map((item) => (
                    <Flight 
                        flightData={item} 
                        key={item.id} 
                        onAddFlight={(flight) => addSelectedFlightFrom(flight)}
                        onDeleteFlight={() => deleteSelectedFlightFrom()}
                        isSelected={selectedFlights.selectedFlightFrom?.id === item.id}
                    />
                ))}
                <hr />
                {items?.flightsBack?.map((item) => (
                    <Flight
                        flightData={item}
                        key={item.id}
                        onAddFlight={(flight) => addSelectedFlightBack(flight)}
                        onDeleteFlight={() => deleteSelectedFlightBack()}
                        isSelected={selectedFlights.selectedFlightBack?.id === item.id}
                    />
                ))}

                {selectedFlights?.selectedFlightFrom ? (
                        <Link to="/booking" state={{ searchParams: params.toString() }}>
                            <button className="btn btn-primary test-4-bgobook mt-4">
                                Перейти к бронированию
                            </button>
                        </Link>
                    ) : null
                }
            </section>
        </div>
    );
};

export default SearchModule;
