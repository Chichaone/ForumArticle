import {observer} from "mobx-react-lite"
import React from "react";
import './Admin.scss'
import Table from "../Table/Table";
import BanList from "../../pages/BanList/BanList";
import AssigningRoles from "../../pages/AssigningRoles/AssigningRoles";
import decodedUsersData from "../../../lib/store/decoded-users-data";
import {useLocalStorage} from "usehooks-ts";
import routes from "../../../lib/routes";

export default observer(() => {
    const [token, setToken] = useLocalStorage('_token', '')

    const onClickExit = () => {
        setToken('')
        window.open(routes.HOME, '_self')
    }

    return (
        <div className='admin'>
                <div className="card">
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
                <div className="divider divider-neutral">Ниже вся информация о пользователях</div>
                <div>
                    <div className="card-input">
                        <BanList/>
                        <AssigningRoles/>
                    </div>
                    <Table/>
                </div>
            </div>
    )
})
