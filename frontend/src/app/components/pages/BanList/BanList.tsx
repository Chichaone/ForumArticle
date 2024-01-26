import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import banListStore from "../../../lib/store/ban-list-store";
import Toaster from "../../../../core/lib/Toaster/Toaster";
import {toast} from "react-toastify";

const BanList = () => {
    useEffect(() => {
        banListStore.getAllUsers()
    }, []);

    const arrayUserID = banListStore.dataUsers.map((value) => (
        value.id
    ))

    const userId = banListStore.userId;

    const onClickBanUser = () => {
        if (!arrayUserID.includes(userId)){
            new Toaster({msg: `Пользователя с данным ID не существует`, type: toast.TYPE.WARNING})
        } else {
            banListStore.banUser()
            new Toaster({msg: `ОБновите страницу для тображения новых данных`, type: toast.TYPE.SUCCESS})
        }
    }
    return (
        <div className="card">
            <div className="text">Блокировка пользователя</div>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Введите id пользователя</span>
                </div>
                <input value={banListStore.userId}
                       onChange={(event) => banListStore.setUserId(Number(event.target.value))}
                       type="number"
                       placeholder="Введите id пользователя"
                       className="input input-bordered w-full max-w-xs"
                />
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Введите причину блокировки</span>
                </div>
                <input value={banListStore.banReason}
                       onChange={(event) => banListStore.setBanReason(event.target.value)}
                       type="text"
                       placeholder="Введите текст"
                       className="input input-bordered w-full max-w-xs"
                />
            </label>
            <button onClick={onClickBanUser} className="btn btn-wide btn-neutral">Заблокировать</button>
        </div>
    );
};

export default observer(BanList);