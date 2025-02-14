import { useEffect, useState } from "react"
import { getManagement } from "../../api/booking-management/management"

const BookingManagementModule = () => {
    const [management, setManagement] = useState('')

    useEffect(() => {
        getManagement().then((data) => setManagement(data))
    }, [])

    console.log(management);


    return (

        <div className="container">
            <section className="mt-5">
                <div className="d-flex justify-content-between align-items-start">
                    <h2 className="mb-4">
                        Регистрация <span className="test-6-code">{management.booking?.bookingNumber}</span>
                    </h2>
                    <a href="/" className="btn btn-sm btn-secondary test-6-gohome">На главную</a>
                </div>

                <p>Стоимость бронирования: <span className="test-6-tp">16000</span></p>

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
                            <th>Время полета</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="test-6-fc">{management.booking?.flight.flight}</td>
                            <td className="test-6-from">{management.booking?.flight.fromi.city}</td>
                            <td className="test-6-from">{management.booking?.flight.fromi.data}, {management.booking?.flight.fromi.time}</td>
                            <td className="test-6-to">{management.booking?.flight.to.city}</td>
                            <td className="test-6-at">{management.booking?.flight.to.time}</td>
                            <td className="test-6-ft">
                                <span className="test-6-fhour">1</span> h
                                <span className="test-6-fminutes"> 30</span> min
                            </td>
                        </tr>
                    </tbody>


                </table>

                <div className="d-flex justify-content-between align-items-baseline mt-5 mb-4">
                    <h4>Пассажиры</h4>
                </div>

                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Имя</th>
                            <th>Фамилия</th>
                            <th>Дата рождения</th>
                            <th>Номер документа</th>
                            <th>Место</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{management.firstName}</td>
                            <td>{management.lastName}</td>
                            <td>{management.dataBirth}</td>
                            <td>{management.documentNumber}</td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>

                <a href="/seat" className="btn btn-primary test-6-select">Выбрать место</a>

            </section>
        </div>

    )
}

export default BookingManagementModule