import { useState } from 'react'
import { login } from '../../api/auth/login'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router'


const LoginModule = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleNavigation = () =>{

        setTimeout(() => {
            navigate('/')
        }, 2000)
        if (phone && password) {
            toast.success('Успешно авторизовались')
        } else {
            toast.error('Ошибка')
        }
        
    }
    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const hadleSubmit = async (event) => {
        event.preventDefault()
        try {
            await login(phone, password);
            
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <div className="container vh-100 d-flex align-items-center justify-content-center">
                <section className="mt-5 w-75">
                    <h2 className="mb-5 text-center">Авторизоваться</h2>
                    <form method="POST" onSubmit={hadleSubmit}>
                        <div className="row">
                            <div className="col-12 mt-2">
                                <input
                                    type="text"
                                    onChange={handleChangePhone}
                                    className="form-control test-1-fpn"
                                    placeholder="Телефон"
                                    required
                                />
                                <div className="invalid-feedback test-1-emph">Сообщение об ошибке</div>
                            </div>
                            <div className="col-12 mt-2">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Пароль"
                                    className="form-control test-1-fpn"
                                    onChange={handleChangePassword}
                                    required
                                />
                            </div>
                            <div className="col-12 mt-4">
                                <button className="btn btn-primary w-100 test-1-fbs" type='submit' onClick={handleNavigation}>Авторизоваться</button>
                                <div className="text-center mt-2 error"></div>
                            </div>
                        </div>
                    </form>
                    <div className="text-center mt-2">
                        У вас уже есть аккаунт?  <a href="/register" className="test-1-bbh">Зарегистрироваться</a> или <a href="/" className="test-1-bbh">Назад домой</a>
                    </div>
                </section >
                <ToastContainer position='top-center'/>
            </div>
            
        </>

    );
}

export default LoginModule