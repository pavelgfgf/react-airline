import { useNavigate } from 'react-router'
import './style.css'

const SeatModule = () => {
    const navigate = useNavigate() 

    return (
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">

                    <div className="passengers">
                        <h2>Выбор места пассажира</h2>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Имя</th>
                                    <th>Фамилия</th>
                                    <th>Место</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="test-90-name">John</td>
                                    <td className="test-90-last">Doe</td>
                                    <td>
                                        <span className="test-90-seat">1A</span>
                                        <button className="btn btn-secondary ms-3 test-90-bselect ms-3">Выбрать</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="test-90-name">Ivan</td>
                                    <td className="test-90-last">Ivanov</td>
                                    <td>
                                        <span className="test-90-seat">1B</span>
                                        <button className="btn btn-secondary ms-3 test-90-bselect ms-3">Выбрать</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <a className="btn test-90-bconfirm btn-secondary me-3" onClick={() => navigate(-1)}>Назад</a>
                        <a href="/booking-management" className="btn test-90-bconfirm btn-success">Подтвердить</a>
                    </div>

                </div>
                <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">

                    <div className="scheme">
                        <div className="d-flex mb-2">
                            <div className="number"></div>
                            <div className="d-flex me-3">
                                <div className="letter">A</div>
                                <div className="letter">B</div>
                            </div>
                            <div className="d-flex ms-3">
                                <div className="letter">C</div>
                                <div className="letter">D</div>
                            </div>
                            <div className="number"></div>
                        </div>
                        {/* row */}
                        <div className="d-flex mb-2">
                            <div className="number">1</div>
                            <div className="d-flex me-3">
                                <div className="seat test-100-1a seat-selected"></div>
                                <div className="seat test-100-1b seat-selected"></div>
                            </div>
                            <div className="d-flex ms-3">
                                <div className="seat test-100-1c"></div>
                                <div className="seat test-100-1d"></div>
                            </div>
                            <div className="number">1</div>
                        </div>

                        <div className="d-flex mb-2">
                            <div className="number">2</div>
                            <div className="d-flex me-3">
                                <div className="seat test-100-2a "></div>
                                <div className="seat test-100-2b "></div>
                            </div>
                            <div className="d-flex ms-3">
                                <div className="seat test-100-2c"></div>
                                <div className="seat test-100-2d"></div>
                            </div>
                            <div className="number">2</div>
                        </div>

                        <div className="d-flex mb-2">
                            <div className="number">3</div>
                            <div className="d-flex me-3">
                                <div className="seat test-100-3a"></div>
                                <div className="seat test-100-3b"></div>
                            </div>
                            <div className="d-flex ms-3">
                                <div className="seat test-100-3c"></div>
                                <div className="seat test-100-3d"></div>
                            </div>
                            <div className="number">3</div>
                        </div>

                        <div className="d-flex mb-2">
                            <div className="number">4</div>
                            <div className="d-flex me-3">
                                <div className="seat test-100-4a"></div>
                                <div className="seat test-100-4b"></div>
                            </div>
                            <div className="d-flex ms-3">
                                <div className="seat test-100-4c"></div>
                                <div className="seat test-100-4d"></div>
                            </div>
                            <div className="number">4</div>
                        </div>

                        <div className="d-flex mb-2">
                            <div className="number">5</div>
                            <div className="d-flex me-3">
                                <div className="seat test-100-5a "></div>
                                <div className="seat test-100-5b "></div>
                            </div>
                            <div className="d-flex ms-3">
                                <div className="seat test-100-5c"></div>
                                <div className="seat test-100-5d"></div>
                            </div>
                            <div className="number">5</div>
                        </div>

                        <div className="d-flex mb-2">
                            <div className="number">6</div>
                            <div className="d-flex me-3">
                                <div className="seat test-100-6a"></div>
                                <div className="seat test-100-6b"></div>
                            </div>
                            <div className="d-flex ms-3">
                                <div className="seat test-100-6c"></div>
                                <div className="seat test-100-6d"></div>
                            </div>
                            <div className="number">6</div>
                        </div>

                        <div className="d-flex mb-2">
                            <div className="number">7</div>
                            <div className="d-flex me-3">
                                <div className="seat test-100-7a "></div>
                                <div className="seat test-100-7b "></div>
                            </div>
                            <div className="d-flex ms-3">
                                <div className="seat test-100-7c"></div>
                                <div className="seat test-100-7d"></div>
                            </div>
                            <div className="number">7</div>
                        </div>

                        <div className="d-flex mb-2">
                            <div className="number">8</div>
                            <div className="d-flex me-3">
                                <div className="seat test-100-8a "></div>
                                <div className="seat test-100-8b "></div>
                            </div>
                            <div className="d-flex ms-3">
                                <div className="seat test-100-8c"></div>
                                <div className="seat test-100-8d"></div>
                            </div>
                            <div className="number">8</div>
                        </div>

                        <div className="d-flex mb-2">
                            <div className="number">9</div>
                            <div className="d-flex me-3">
                                <div className="seat test-100-9a "></div>
                                <div className="seat test-100-9b "></div>
                            </div>
                            <div className="d-flex ms-3">
                                <div className="seat test-100-9c"></div>
                                <div className="seat test-100-9d"></div>
                            </div>
                            <div className="number">9</div>
                        </div>

                        <div className="d-flex mb-2">
                            <div className="number">10</div>
                            <div className="d-flex me-3">
                                <div className="seat test-100-10a "></div>
                                <div className="seat test-100-10b "></div>
                            </div>
                            <div className="d-flex ms-3">
                                <div className="seat test-100-10c"></div>
                                <div className="seat test-100-10d"></div>
                            </div>
                            <div className="number">10</div>
                        </div>

                        <div className="d-flex mb-2">
                            <div className="number">11</div>
                            <div className="d-flex me-3">
                                <div className="seat test-100-11a "></div>
                                <div className="seat test-100-11b "></div>
                            </div>
                            <div className="d-flex ms-3">
                                <div className="seat test-100-11c"></div>
                                <div className="seat test-100-11d"></div>
                            </div>
                            <div className="number">11</div>
                        </div>

                        <div className="d-flex mb-2">
                            <div className="number">12</div>
                            <div className="d-flex me-3">
                                <div className="seat test-100-12a "></div>
                                <div className="seat test-100-12b "></div>
                            </div>
                            <div className="d-flex ms-3">
                                <div className="seat test-100-12c"></div>
                                <div className="seat test-100-12d"></div>
                            </div>
                            <div className="number">12</div>
                        </div>

                    </div>

                </div>
            </div>
        </div>


    )
}

export default SeatModule