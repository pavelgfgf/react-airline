import { useEffect, useState } from "react"
import { getbookingDetail } from "../../api/booking/booking";
import { useParams } from "react-router";

const BookingManagementModule = () => {
    const [management, setManagement] = useState({})
    const { code } = useParams();

    useEffect(() => {
        getbookingDetail(code).then(({ data }) => setManagement(data));
    }, []);
    
    return (
        <div className="container">
            <section className="mt-5">
                <div className="d-flex justify-content-between align-items-start">
                    <h2 className="mb-4">
                        Регистрация <span className="test-6-code">{management.code}</span>
                    </h2>
                    <a href="/" className="btn btn-sm btn-secondary test-6-gohome">На главную</a>
                </div>

                <p>
                    Стоимость бронирования: 
                    <span className="test-6-tp">
                        {' '}
                        {management?.flights?.reduce((acc, curr) => acc += curr.cost, 0)}
                    </span>
                </p>

                <div className="d-flex justify-content-between align-items-baseline mt-5 mb-2">
                    <h4>Информация о рейсе</h4>
                </div>

                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Номер рейса</th>
                            <th>Откуда</th>
                            <th>Дата и время отправления</th>
                            <th>Куда</th>
                            <th>Время прибытия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {management?.flights?.map((flight) => (
                             <tr key={flight.id}>
                                <td className="test-6-fc">{flight.flightCode}</td>
                                <td className="test-6-from">{flight.from.iata}</td>
                                <td className="test-6-from">{flight.from.date}, {flight.from.time}</td>
                                <td className="test-6-to">{flight.to.iata}</td>
                                <td className="test-6-from">{flight.to.date}, {flight.to.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>

    )
}

export default BookingManagementModule;
