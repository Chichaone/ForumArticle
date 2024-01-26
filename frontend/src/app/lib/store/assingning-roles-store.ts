import {makeAutoObservable} from "mobx";
import services from "../services/services";
import authStore from "./auth-store";
import banListStore from "./ban-list-store";


interface IAssigningRolesStore {
    value: string
    userId:number
}

class AssigningRolesStore implements IAssigningRolesStore {
    value = ''
    userId=0

    constructor() {
        makeAutoObservable(this)
    }

    setValue(val: string) {
        this.value = val
    }

    setUserId(val: number) {
        this.userId = val
    }

    addRole() {
        services
            .postApiAddRole(authStore.token, {value: this.value, userId: this.userId})
            .then((val) => {
                if (val === 201) {
                    banListStore.getAllUsers()
                }
            })
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AssigningRolesStore()
