import {makeAutoObservable} from "mobx";


interface IDecodedUsersDataStore {
    email: string
    userId: number
    role: string
}

class DecodedUsersDataStore implements IDecodedUsersDataStore {
    email = ''
    userId = 0
    role = ''

    constructor() {
        makeAutoObservable(this)
    }

    setEmail(val: string) {
        this.email = val
    }

    setRole(val: string) {
        this.role = val
    }

    setUserId(val: number) {
        this.userId = val
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new DecodedUsersDataStore()
