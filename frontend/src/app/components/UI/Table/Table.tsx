import {observer} from "mobx-react-lite"
import React from "react";
import './Table.scss'
import banListStore from "../../../lib/store/ban-list-store";
import IconStore from "../../../../core/components/Icons/IconStore";

export default observer(() => {

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Роль</th>
                    <th>Блокировка</th>
                    <th>Причина блокировки</th>
                </tr>
                </thead>
                <tbody>
                {
                    banListStore.dataUsers.map((user, index) => (
                        <tr key={`table-users-${index}`}>
                            <td>
                                {user.id}
                            </td>
                            <td>{user.email}</td>
                            <td>{user.roles.map((role,index) => <div key={`table-users-role-${index}`}>{role.value}</div>)}</td>
                            <td>{user.banned !== true ?
                                <span style={{color: 'green'}} className={IconStore.unclock}></span>
                                :
                                <span style={{color: 'red'}} className={IconStore.clock}></span>}
                            </td>
                            <td>{user.banReason}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
})
