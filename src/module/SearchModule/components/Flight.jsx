import PropTypes from 'prop-types';


const Flight = ({ flightData, onAddFlight, onDeleteFlight, isSelected }) => {

    return (
        <div className="mb-4">
            <h5 className="mt-4 mb-3">
                <span className="test-4-fif1" id="city1">{flightData.from.city}</span>
                <span className="ms-3 me-3">&#10095;</span>
                <span className="test-4-fit1" id="city2">{flightData.to.city}</span>
            </h5>

            <div style={{ display: 'flex', padding: 10 }}>
                <div style={{ padding: 10 }}>
                    <input 
                        type='checkbox'
                        value={flightData.id}
                        checked={isSelected}
                        onChange={() => {
                            isSelected ? onDeleteFlight() : onAddFlight(flightData)
                        }}
                    />
                </div>

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
                            <td>{flightData.flightCode}</td>
                            <td>Airbus A320</td>
                            <td>{flightData.from.date}, {flightData.from.time}</td>
                            <td>1 час 10 минут</td>
                            <td>{flightData.to.date}, {flightData.to.time}</td>
                            <td>{flightData.cost} ₽</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

Flight.propTypes = { 
    flightData: PropTypes.object, 
    onAddFlight: PropTypes.func, 
    onDeleteFlight: PropTypes.func,
    isSelected: PropTypes.bool,
}
export default Flight;
