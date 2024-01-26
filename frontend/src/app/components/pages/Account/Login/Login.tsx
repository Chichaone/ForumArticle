import {observer} from "mobx-react-lite"
import React from "react";
import './Login.scss'
import authStore from "../../../../lib/store/auth-store";
import {useLocalStorage} from "usehooks-ts";
import routes from "../../../../lib/routes";
import {Link} from "react-router-dom";

export default observer(() => {

    const [token, setToken] = useLocalStorage('_token', '');

    const onClickAuthLogin = () => {
        authStore.authLogin().then((val) => {
            if (val && val.length !== 0) {
                setToken(val);
                window.open(routes.HOME, '_self')
            }
        })
    }

    return (
        <div className='account'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Вход</h2>
                    <p>Для возможности публикации статьи нужно войти или зарегистрироваться</p>
                    <input value={authStore.login}
                           onChange={(event) => authStore.setLogin(event.target.value)}
                           type="email" placeholder="Введите email " className="input input-bordered w-full max-w-xs" required/>
                    <input value={authStore.password} onChange={(event) => authStore.setPassword(event.target.value)}
                           type="password" placeholder="Введите пароль" className="input input-bordered w-full max-w-xs" required/>
                    <div className="card-actions justify-end">
                        <button onClick={onClickAuthLogin} className="btn btn-wide">Войти</button>
                    </div>
                    <div className="form-control mt-6">
                        <Link to={routes.REGISTRATION} className="btn btn-wide">Зарегистрироваться</Link>
                    </div>
                </div>
            </div>
        </div>
    )
})
