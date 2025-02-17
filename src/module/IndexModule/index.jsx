import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FlightsContext } from '../../Context';

const IndexModule = () => {
    const navigate = useNavigate();
    const { clearSelectedFlights } = useContext(FlightsContext);

    useEffect(() => {
        clearSelectedFlights();
    }, []);

    const searchParams = new URLSearchParams([['passengers', '1']])

    const handleNavigate = (e) => {
        e.preventDefault()
        navigate({ pathname: '/search', search: `?${searchParams.toString()}` })
    }

    const handleChangeSearchFrom = (e) => {
        searchParams.set('from', e.target.value)
    }

    const handleChangeSearchTo = (e) => {
        searchParams.set('to', e.target.value)
    }

    const handleChangeDateTo = (e) => {
        searchParams.set('date1', e.target.value)
    }

    const handleChangeDateBack = (e) => {
        searchParams.set('date2', e.target.value)
    }

    const handleChangePassengers = (e) => {
        searchParams.set('passengers', e.target.value || 1)
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <img src="src/assets/img/logo4.png" className="logo test-0-logo" alt="logo" />

                    <div className="navbar-collapse flex-grow-0">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link test-0-nav-1" href="#">Акции</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link test-0-nav-2" href="/search">Поиск</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link test-0-nav-3" href="/register">Регистрация</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link test-0-nav-4" href="/login">Личный кабинет</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container">
                <section className="mt-5">
                    <h2 className="mb-4">Поиск авиабилетов</h2>

                    <form method="GET">
                        <div className="row">

                            <div className="col-12 col-sm-6 col-lg-4 col-xl-3 pr-lg-0">
                                <input
                                    type="text"
                                    className="form-control test-0-fd w-100"
                                    placeholder="Откуда"
                                    onChange={handleChangeSearchFrom}
                                    id="from1"
                                />
                                <div className="invalid-feedback">Сообщение об ошибке</div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mt-3 col-xl-3 mt-sm-0 pr-lg-0">
                                <input
                                    type="text"
                                    className="form-control test-0-fa w-100"
                                    placeholder="Куда"
                                    onChange={handleChangeSearchTo}
                                    id="to1"
                                />
                                <div className="invalid-feedback">Сообщение об ошибке</div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-lg-0">
                                <input
                                    type="date"
                                    className="form-control test-0-fdt"
                                    id="dateto"
                                    onChange={handleChangeDateTo}
                                />
                                <div className="invalid-feedback">Сообщение об ошибке</div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-lg-0">
                                <input
                                    type="date"
                                    className="form-control test-0-fdt"
                                    id="dateback"
                                    onChange={handleChangeDateBack}
                                />
                                <div className="invalid-feedback">Сообщение об ошибке</div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2 mt-3 col-xl-1 mt-lg-0 pr-xl-0">
                                <select defaultValue={1} className="form-control test-0-fnp" id="kol" onChange={handleChangePassengers}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </select>
                                <div className="invalid-feedback">Сообщение об ошибке</div>
                            </div>

                            <div className="col-12 col-xl-1 px-2 mt-3 mt-xl-0">
                                <button className="btn btn-success" onClick={handleNavigate}>Найти</button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}

export default IndexModule