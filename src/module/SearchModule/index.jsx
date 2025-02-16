import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { getFlights } from "../../api/airports/airports";


const SearchModule = () => {
    const [params] = useSearchParams()
    const [items, setItems] = useState([])

    useEffect(() => {
        if (params) {
            const searchFrom = params.get('from');
            const searchTo = params.get('to');
            const date1 = params.get('date1');
            const passengers = params.get('passengers')
            getFlights(searchFrom, searchTo, date1, passengers).then((response) => {
                setItems(response.data.flightTo)

                console.log(response);
            })



        }
    }, [params])


    return (
        <div className="container">
            <section className="mt-5">
                <form action="GET">
                    <div className="d-flex justify-content-between align-items-start">
                        <h2 className="mb-4">Из {params.get("from")} в {params.get("to")}.</h2>
                        <a href="/" className="btn btn-sm btn-secondary test-4-bback">Назад</a>
                    </div>

                    {items.length > 0 ? (
                        items.map((item, i) => (
                            <div key={item.id || i} className="mb-4">
                                <h5 className="mt-4 mb-3">
                                    <span className="test-4-fif1" id="city1">{item.from.city}</span>
                                    <span className="ms-3 me-3">&#10095;</span>
                                    <span className="test-4-fit1" id="city2">{item.to.city}</span>
                                </h5>

                                <table className="table table-bordered tablefrom">
                                    <thead>
                                        <tr>
                                            <th>Номер рейса</th>
                                            <th>Самолет</th>
                                            <th>Дата и время отправления</th>
                                            <th>Время полета</th>
                                            <th>Время прибытия</th>
                                            <th>Стоимость</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{item.flightCode}</td>
                                            <td>Airbus A320</td>
                                            <td>{item.from.date}, {item.from.time}</td>
                                            <td>1 час 10 минут</td>
                                            <td>{item.to.date}, {item.to.time}</td>
                                            <td>{item.cost} ₽</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ))
                    ) : (
                        <p>Рейсы не найдены</p>
                    )}
                </form>

                <a href="/booking" className="btn btn-primary test-4-bgobook mt-4">Перейти к бронированию</a>
            </section>
        </div>
    );
};

export default SearchModule;
