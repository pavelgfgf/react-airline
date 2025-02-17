import { useContext, useEffect, useState } from "react";
import { booking } from "../../api/booking/booking";
import { useLocation, useNavigate } from "react-router";
import { FlightsContext } from '../../Context';
import { Link } from "react-router";

const BookingModule = () => {
    const { passengerCount, selectedFlights } = useContext(FlightsContext);
    const [passengers, setPassengers] = useState([]);
    const navigate = useNavigate();
    const { state } = useLocation();

    const { selectedFlightFrom, selectedFlightBack } = selectedFlights

    useEffect(() => {
        const initPassengers = Array.from({ length: passengerCount}, () => ({
            id: crypto.randomUUID(),
            firstName: '',
            lastName: '',
            documentNumber: '',
            birthDate: '',
        }));
        setPassengers(initPassengers);
    }, []);

    const onChangeValue = (e, passangerId, key) => {
        setPassengers((prev) => {
            return prev.map((passenger) => {
                if (passenger.id === passangerId) {

                    return { ...passenger, [key]: e.target.value }
                }
                return { ...passenger };
            });
        })
    }

    // const addPassenger = () => {
    //     setPassenger((prev) => [...prev, {
    //         'id': crypto.randomUUID(),
    //         'firstName': '',
    //         'lastName': '',
    //         "document_number": ''
    //     }])
    // }

    // const deletePassenger = (passangerId) => {
    //     setPassenger((prev) => prev.filter(({ id }) => passangerId !== id))
    // }

    console.log(selectedFlights);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const flightFrom = selectedFlights.selectedFlightFrom;
            const flightBack = selectedFlights.selectedFlightBack;

            const response = await booking(passengers, flightFrom, flightBack)
            navigate(`/booking/${response.data.code}`)

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <>
            <div className="container">
                <section className="mt-5">

                    <div className="d-flex justify-content-between align-items-start">
                        <h2 className="mb-4">
                            Бронирование
                        </h2>
                        <Link to={`/search?${state.searchParams}`} className="btn btn-sm btn-secondary test-5-bgoback">
                            Назад
                        </Link>
                    </div>

                    <div className="d-flex justify-content-between align-items-baseline mb-4">
                        <h4>Информация о рейсе</h4>
                    </div>

                    <table className="table table-hover table-bordered ">
                        <thead className="table-primary">
                            <tr>
                                <th>Рейс</th>
                                <th>Откуда, Аэропорт</th>
                                <th>Дата и время отправления</th>
                                <th>Куда, Аэропорт</th>
                                <th>Стоимость</th>
                            </tr>
                        </thead>
                        <tbody className="table-success">
                            {selectedFlightFrom && (
                                <tr key={selectedFlightFrom.id}>
                                    <td>{selectedFlightFrom.flightCode}</td>
                                    <td>{selectedFlightFrom.from?.city}, {selectedFlightFrom.from?.iata}</td>
                                    <td>{selectedFlightFrom.from?.date}, {selectedFlightFrom.from?.time}</td>
                                    <td>{selectedFlightFrom.to?.city}, {selectedFlightFrom.to?.iata}</td>
                                    <td>{selectedFlightFrom.cost}</td>
                                </tr>
                                )}
                            {selectedFlightBack && (
                                <tr key={selectedFlightBack.id}>
                                    <td>{selectedFlightBack.flightCode}</td>
                                    <td>{selectedFlightBack.from?.city}, {selectedFlightBack.from?.iata}</td>
                                    <td>{selectedFlightBack.from?.date}, {selectedFlightBack.from?.time}</td>
                                    <td>{selectedFlightBack.to?.city}, {selectedFlightBack.to?.iata}</td>
                                    <td>{selectedFlightBack.cost}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>

                <section className="mt-5">
                    <div className="d-flex justify-content-between align-items-baseline mb-4">
                        <h4>Пассажиры</h4>
                        {/* {passengers.length < 8 && <button className="btn btn-primary btn-sm test-5-add" onClick={() => addPassenger()}>Добавить пассажира</button>} */}
                    </div>

                        {passengers?.map((passenger) => {
                            return (
                                <div className="row" key={passenger.id} style={{ paddingBottom: 20 }}>
                                     <hr />
                                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 pr-lg-0 mb-4">
                                        <input
                                            type="text"
                                            className="form-control test-5-name w-100"
                                            placeholder="Имя"
                                            onChange={(e) => onChangeValue(e, passenger.id, 'firstName')}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4 mt-3 col-xl-3 mt-sm-0 pr-lg-0">
                                        <input
                                            type="text"
                                            className="form-control test-5-last w-100"
                                            placeholder="Фамилия"
                                            onChange={(e) => onChangeValue(e, passenger.id, 'lastName')}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-lg-0">
                                        <input
                                            type="text"
                                            className="form-control test-5-dob"
                                            placeholder="Дата рождения"
                                            onChange={(e) => onChangeValue(e, passenger.id, 'birthDate')}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-xl-0">
                                        <input
                                            type="text"
                                            className="form-control test-5-doc"
                                            placeholder="Номер документа"
                                            onChange={(e) => onChangeValue(e, passenger.id, 'documentNumber')}
                                        />
                                    </div>
                                    {/* <div className="col-12 col-xl-2 mt-3 mt-xl-0">
                                        <button className="btn btn-danger btn-sm form-control test-5-bremove mb-4" type="button" onClick={() => deletePassenger(passenger.id)}>Удалить</button>
                                    </div> */}
                                </div>
                            )
                        })}

                        <button className="btn btn-success mt-4 form-control test-5-book" onClick={handleSubmit}> Подтвердить </button>
                </section>

            </div>
        </>
    )
};

export default BookingModule;
