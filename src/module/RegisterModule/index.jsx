import { useState } from "react"
import { register } from "../../api/auth/register"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from "react-router"

const RegisterModule = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleNavigate = () => {
    
        setTimeout(() => {
            navigate('/')
        }, 2000)

        if (userName) {
            toast.success('Успешно авторизовались')
        } else {
            toast.error('Ошибка')
        }
    }


    const handleChangeUserName = (e) => {
        setUserName(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await register(userName, password)
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
                        <div className="col-12 mt-2 col-md-6">
                            <input
                                type="text"
                                className="form-control test-2-phone"
                                placeholder="Имя пользователя"
                                id="tel"
                                onChange={handleChangeUserName}
                            />
                            <div className="invalid-feedback test-2-empn">Сообщение об ошибке</div>
                        </div>
                        <div className="col-12 mt-2 col-md-6">
                            <input 
                                type="password"
                                className="form-control test-2-pass"
                                placeholder="Пароль"
                                id="password"
                                onChange={handleChangePassword} 
                            />
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
                    </div>
                </form>
            </section>

        </div>
    )
}

export default RegisterModule