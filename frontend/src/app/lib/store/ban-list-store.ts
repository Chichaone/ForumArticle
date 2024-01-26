import {makeAutoObservable} from "mobx";
import services from "../services/services";
import authStore from "./auth-store";
import {User} from "../models/User";


interface IBanListStore {
    dataUsers: User[]
    userId: number
    banReason: string
}

class BanListStore implements IBanListStore {
    dataUsers: User[] = []
    userId = 0
    banReason = ''

    constructor() {
        makeAutoObservable(this)
    }

    setDataUsers(val: User[]) {
        this.dataUsers = val
    }

    setUserId(val: number) {
        this.userId = val
    }

    setBanReason(val: string) {
        this.banReason = val
    }

    getAllUsers() {
        services
            .getApiAllUsers(authStore.token)
            .then((val) => {
                this.setDataUsers(val)
            })
    }

    banUser() {
        services
            .postBanUser(authStore.token, {userId: this.userId, banReason: this.banReason})
            .then((val) => {
                if (val === 201) {
                    this.getAllUsers()
                }
            })
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new BanListStore()
