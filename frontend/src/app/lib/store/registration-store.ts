import {makeAutoObservable} from "mobx";
import services from "../services/services";


interface IRegistrationStore {
    login: string
    password: string
    passwordConfirmation: string

}

class RegistrationStore implements IRegistrationStore {
    login = ''
    password = ''
    passwordConfirmation = ''


    constructor() {
        makeAutoObservable(this)
    }

    setLogin(val: string) {
        this.login = val
    }

    setPassword(val: string) {
        this.password = val
    }
    setPasswordConfirmation(val: string) {
        this.passwordConfirmation = val
    }

    authRegistration(): Promise<string> {
        return services
            .postAuthRegistration(this.login, this.password)
            .then((value: string) => {
                return value
            })
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new RegistrationStore()
