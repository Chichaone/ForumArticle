import {makeAutoObservable} from "mobx";
import services from "../services/services";


interface IAuthStore {
    login: string
    password: string
    token: string
}

class AuthStore implements IAuthStore {
    login = ''
    password = ''
    token = ''

    constructor() {
        makeAutoObservable(this)
    }

    setLogin(val: string) {
        this.login = val
    }

    setPassword(val: string) {
        this.password = val
    }

    setToken(val: string) {
        this.token = val
    }

    authLogin(): Promise<string> {
        return services
            .postAuthLogin(this.login, this.password)
            .then((value: string) => {
                return value
            })
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthStore()
