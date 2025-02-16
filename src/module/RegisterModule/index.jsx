import { useState } from "react"
import { register } from "../../api/auth/register"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from "react-router"

const RegisterModule = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [documentNumber, setDocumentNumber] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleNavigate = () => {

        setTimeout(() => {
            navigate('/')
        }, 2000)

        if (firstName && lastName && documentNumber && phone) {
            toast.success('Успешно авторизовались')
        } else {
            toast.error('Ошибка')
        }
    }

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleChangeDocumentNumber = (e) => {
        setDocumentNumber(e.target.value)
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await register(firstName, lastName, documentNumber, phone, password)
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">

            <section className="mt-5 w-75">
                <h2 className="mb-4 text-center">Регистрация</h2>

                <form action="POST" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12 mt-3 col-md-6">
                            <input
                                type="text"
                                className="form-control test-2-name"
                                placeholder="Имя"
                                id="name"
                                onChange={handleChangeFirstName} />
                        </div>
                        <div className="col-12 mt-3 col-md-6">
                            <input
                                type="text"
                                className="form-control test-2-last"
                                placeholder="Фамилия"
                                id="second"
                                onChange={handleChangeLastName}
                            />
                        </div>
                        <div className="col-12 mt-3 col-md-6">
                            <input
                                type="text"
                                className="form-control test-2-doc"
                                placeholder="Номер документа"
                                id="pasport"
                                onChange={handleChangeDocumentNumber}
                            />
                        </div>
                        <div className="col-12 mt-3 col-md-6">
                            <input
                                type="text"
                                className="form-control test-2-phone"
                                placeholder="Телефон"
                                id="tel"
                                onChange={handleChangePhone}
                            />
                        </div>
                        <div className="col-12 mt-3 col-md-6">
                            <input
                                type="password"
                                className="form-control test-2-pass"
                                placeholder="Пароль"
                                id="password"
                                onChange={handleChangePassword}
                            />
                        </div>
                        <div className="col-12 mt-3 col-md-6">
                            <input
                                type="password"
                                className="form-control test-2-pass2"
                                placeholder="Подтверждение пароля"
                                id="repeat_password"
                            />
                        </div>
                        <div className="invalid-feedback test-2-empw">Сообщение об ошибке</div>
                    </div>
                    <div className="col-12 mt-3">
                        <button className="btn btn-primary w-100 test-2-btn" id="register" onClick={handleNavigate}>Зарегистрируйтесь прямо сейчас</button>
                        <ToastContainer position="top-center" />
                        <div className="text-center mt-2" id="error">

                        </div>
                        <div className="text-center mt-2">
                            У вас уже есть аккаунт? <a href="/login" className="test-2-blgn">Авторизоваться</a> или <a href="/" className="test-2-bbhm">Назад домой</a>
                        </div>
                    </div>
                </form>
            </section>

        </div>
    )
}

export default RegisterModule