import {observer} from "mobx-react-lite"
import React from "react";
import './User.scss'
import {useLocalStorage} from "usehooks-ts";
import routes from "../../../lib/routes";
import decodedUsersData from "../../../lib/store/decoded-users-data";

export default observer(() => {
    const [token, setToken] = useLocalStorage('_token', '')

    const onClickExit = () => {
        setToken('')
        window.open(routes.HOME, '_self')
    }

    return (
        <div className='user'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Вы вошли в аккаунт</h2>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Логин пользователя</span>
                        </div>
                        <input type="text"
                               defaultValue={decodedUsersData.email}
                               className="input input-bordered w-full max-w-xs"
                               disabled
                        />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Роль пользователя</span>
                        </div>
                        <input type="text"
                               defaultValue={decodedUsersData.role}
                               className="input input-bordered w-full max-w-xs"
                               disabled
                        />
                    </label>
                    <button onClick={() => onClickExit()} className="btn btn-wide btn-neutral">Выйти</button>
                </div>
            </div>
        </div>
    )
})
