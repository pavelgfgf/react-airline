import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";

const IndexModule = () => {
    const navigate = useNavigate()

    const searchParams = new URLSearchParams()

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

    const handleChangeDate = (e) => {
        searchParams.set('date1', e.target.value)
    }

    const handleChangePassengers = (e) => {
        searchParams.set('passengers', e.target.value)
    }

    console.log(handleChangePassengers);
    
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
                                    id="datefrom"
                                    onChange={handleChangeDate}
                                />
                                <div className="invalid-feedback">Сообщение об ошибке</div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2 mt-3 col-xl-1 mt-lg-0 pr-xl-0">
                                <select className="form-control test-0-fnp" id="kol" onChange={handleChangePassengers}>
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

                {/* {items.length ? (<section className="mt-4">
                    <h2 className="mb-3">Найденные рейсы</h2>
                    <h4 className="mb-3">Отправление</h4>
                    <table className="table table-bordered table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">Номер рейса</th>
                                <th scope="col">Город отправления</th>
                                <th scope="col">Аэропорт</th>
                                <th scope="col">Стоимость</th>
                            </tr>
                        </thead>

                        {items?.map((item, i) => {
                            return (
                                <tbody key={i} className="table-success">
                                    <tr>
                                        <td scope="row">{item.flight}</td>
                                        <td>{item.fromi.city}</td>
                                        <td>{item.fromi.airport}</td>
                                        <td>{item.cost}</td>
                                    </tr>
                                </tbody>
                            )
                        })} 


                    <h4 className="mb-3 mt-3">Прибытие</h4>
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">Номер рейса</th>
                                <th scope="col">Город прибытия</th>
                                <th scope="col">Аэропорт</th>
                                <th scope="col">Стоимость</th>
                            </tr>
                        </thead>
                        {items?.map((item, i) => {
                            return (
                                <tbody key={i} className="table-success">
                                    <tr>
                                        <td>{item.flight}</td>
                                        <td>{item.to.city}</td>
                                        <td>{item.to.airport}</td>
                                        <td>{item.cost}</td>
                                    </tr>
                                </tbody>
                            )
                        })
                        }
                    </table>
                </section> ) : null} */}


                {/* <section className="mt-5">
                    <h2 className="mb-4">Акции</h2>

                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <img src="src/assets/img/placeholder.jpg" className="card-img-top test-0-ai" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title test-0-an">Акция 1</h5>
                                    <p className="card-text test-0-ad">Рекламный текст</p>
                                    <a href="#" className="btn btn-primary test-0-abm">Больше</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <img src="src/assets/img/placeholder.jpg" className="card-img-top test-0-ai" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title test-0-an">Акция 2</h5>
                                    <p className="card-text test-0-ad">Рекламный текст</p>
                                    <a href="#" className="btn btn-primary test-0-abm">Больше</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <img src="src/assets/img/placeholder.jpg" className="card-img-top test-0-ai" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title test-0-an">Акция 3</h5>
                                    <p className="card-text test-0-ad">Рекламный текст</p>
                                    <a href="#" className="btn btn-primary test-0-abm">Больше</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <img src="src/assets/img/placeholder.jpg" className="card-img-top test-0-ai" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title test-0-an">Акция 4</h5>
                                    <p className="card-text test-0-ad">Рекламный текст</p>
                                    <a href="#" className="btn btn-primary test-0-abm">Больше</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </section> */}


                <section className="mt-5">
                    <h2 className="mb-4">Оформить подписку</h2>

                    <form action="#">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <input type="email" className="form-control test-0-sie" placeholder="example@domain.com" />
                            </div>
                            <div className="col-12 col-md-6">
                                <button className="btn btn-success w-100 test-0-sbs">Подписаться</button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>

            <footer className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <span className="test-0-phone">8 (800) 100-10-10</span>
                        </div>
                        <div className="col-7 offset-2">
                            <div className="d-flex justify-content-between">

                                <a href="http://userX-mX.wsr.ru">Home</a>
                                <a href="http://userX-mX.wsr.ru/login">Loge in</a>
                                <a href="http://userX-mX.wsr.ru/register">Registration</a>
                                <a href="http://userX-mX.wsr.ru/contact">Contact</a>
                                <a href="http://userX-mX.wsr.ru/news">News</a>
                                <a href="http://userX-mX.wsr.ru/return">Return</a>
                                <a href="http://userX-mX.wsr.ru/feedback">Feedback</a>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default IndexModule