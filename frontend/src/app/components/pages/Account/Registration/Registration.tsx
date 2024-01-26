import {observer} from "mobx-react-lite"
import React from "react";
import './Registration.scss'
import {Link} from "react-router-dom";
import routes from "../../../../lib/routes";
import registrationStore from "../../../../lib/store/registration-store";
import {toast} from "react-toastify";
import {useLocalStorage} from "usehooks-ts";
import Toaster from "../../../../../core/lib/Toaster/Toaster";

export default observer(() => {

    const [token, setToken] = useLocalStorage('_token', '')

    const onClickAuthReg = () => {
        if (registrationStore.password===registrationStore.passwordConfirmation){
            registrationStore.authRegistration().then((val) => {
                if (val && val.length !== 0) {
                    setToken(val)
                    window.open(routes.HOME, '_self')
                }
            })
        }else {
            new Toaster({msg: `Пароли не совпадают`, type: toast.TYPE.WARNING})
        }
     }

    return (
        <div className='account'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Регистрация</h2>
                    <p>Для возможности публикации статьи нужно войти или зарегистрироваться</p>
                    <input value={registrationStore.login}
                           onChange={(event) => registrationStore.setLogin(event.target.value)}
                           name={'email'}
                           type="email"
                           placeholder="Введите логин"
                           className="input input-bordered w-full max-w-xs"
                           required
                    />
                    <input value={registrationStore.password}
                           onChange={(event) => registrationStore.setPassword(event.target.value)}
                           name={'password'}
                           type="password"
                           placeholder="Введите пароль"
                           className="input input-bordered w-full max-w-xs"
                           required
                    />
                    <input value={registrationStore.passwordConfirmation}
                           onChange={(event) => registrationStore.setPasswordConfirmation(event.target.value)}
                           type="password"
                           placeholder="Подтверждение пароля"
                           className="input input-bordered w-full max-w-xs"
                           required
                    />

                    <div className="card-actions justify-end">
                        <button onClick={onClickAuthReg} className="btn btn-wide">Регистрация</button>
                    </div>
                    <div className="form-control mt-6">
                        <Link to={routes.LOGIN} className="btn btn-wide">Вход</Link>
                    </div>
                </div>
            </div>
        </div>
    )
})
