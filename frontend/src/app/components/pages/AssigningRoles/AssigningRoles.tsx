import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import banListStore from "../../../lib/store/ban-list-store";
import assingningRolesStore from "../../../lib/store/assingning-roles-store";
import Toaster from "../../../../core/lib/Toaster/Toaster";
import {toast} from "react-toastify";

const AssigningRoles = () => {
    useEffect(() => {
        banListStore.getAllUsers()
    }, []);

    const arrayUserID = banListStore.dataUsers.map((value) => (
        value.id
    ))

    const userId = assingningRolesStore.userId;
    const roles: any = assingningRolesStore.value

    const onClickAddRole = () => {
        if (!arrayUserID.includes(userId)){
            new Toaster({msg: `Пользователя с данным ID не существует`, type: toast.TYPE.WARNING})
        } else {
            assingningRolesStore.addRole()
            new Toaster({msg: `ОБновите страницу для тображения новых данных`, type: toast.TYPE.SUCCESS})
        }
    }
    return (
        <div className="card">
            <div className="text">Назначение роли пользователю</div>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Введите id пользователя</span>
                </div>
                <input value={userId}
                       onChange={(event) => assingningRolesStore.setUserId(Number(event.target.value))}
                       type="number"
                       placeholder="Введите id пользователя"
                       className="input input-bordered w-full max-w-xs"/>
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Выберите роль</span>
                </div>
                <select value={roles}
                        onChange={(event) => assingningRolesStore.setValue(event.target.value)}
                        className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Выбрать роль</option>
                    <option>ADMIN</option>
                    <option>USER</option>
                </select>
            </label>
            <button onClick={onClickAddRole} className="btn btn-wide btn-neutral">Выдать роль</button>
        </div>
    );
};

export default observer(AssigningRoles);