import { useEffect, useState } from "react";
import { getFlight } from "../../api/airports/airports";
import { booking } from "../../api/booking/booking";
import { useNavigate } from "react-router";

const initPassenger = {
    'id': crypto.randomUUID(),
    'firstName': '',
    'lastName': '',
    "document_number": ''
}
const BookingModule = () => {
    const [flight, setFlight] = useState('')
    const [passengers, setPassenger] = useState([initPassenger])
    const navigate = useNavigate()

    useEffect(() => {
        getFlight().then((data) => setFlight(data))
    }, [])

    const onChangeValue = (e, passangerId, key) => {
        setPassenger((prev) => {
            return prev.map((passenger) => {
                if (passenger.id === passangerId) {
                    return { ...passenger, [key]: e.target.value }
                }
                return { ...passenger };
            });
        })
    }

    const addPassanger = () => {
        setPassenger((prev) => [...prev, {
            'id': crypto.randomUUID(),
            'firstName': '',
            'lastName': '',
            "document_number": ''
        }])
    }

    const deletePassenger = (passangerId) => {
        setPassenger((prev) => prev.filter(({ id }) => passangerId !== id))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await booking(passengers)
            console.log(response);

        } catch (error) {
            console.log(error);

        }
        navigate('/booking-management')
    }
    console.log(passengers);

    return (
        <>
            <div className="container">
                <section className="mt-5">

                    <div className="d-flex justify-content-between align-items-start">
                        <h2 className="mb-4">
                            Бронирование
                        </h2>
                        <a href="/search" className="btn btn-sm btn-secondary test-5-bgoback">Назад</a>
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
                            <tr>
                                <td>{flight.flight}</td>
                                <td>{flight.fromi?.city}, {flight.fromi?.iata}</td>
                                <td>{flight.fromi?.date}, {flight.fromi?.time}</td>
                                <td>{flight.to?.city}, {flight.to?.iata}</td>
                                <td>{flight.cost}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="mt-5">
                    <div className="d-flex justify-content-between align-items-baseline mb-4">
                        <h4>Пассажиры</h4>
                        <button className="btn btn-primary btn-sm test-5-add" onClick={() => addPassanger()}>Добавить пассажира</button>
                    </div>

                        {passengers?.map((passenger) => {
                            return (
                                <div className="row" key={passenger.id}>
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
                                            onChange={(e) => onChangeValue(e, passenger.id, 'dataBirth')}
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
                                    <div className="col-12 col-xl-2 mt-3 mt-xl-0">
                                        <button className="btn btn-danger btn-sm form-control test-5-bremove mb-4" type="button" onClick={() => deletePassenger(passenger.id)}>Удалить</button>
                                    </div>
                                </div>
                            )
                        })}

                        <button className="btn btn-success mt-4 form-control test-5-book" onClick={handleSubmit} > Подтвердить </button>
                </section>

            </div>
        </>
    )
};

export default BookingModule;
