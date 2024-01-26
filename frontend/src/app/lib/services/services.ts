import axios from 'axios'
import routes from "../routes";
import {toast} from "react-toastify";
import Toaster from "../../../core/lib/Toaster/Toaster";
import {Posts} from "../models/Posts";
import {User} from "../models/User";



export default {

    async postAuthLogin(email: string, password: string): Promise<string> {

        let result: string

        const url = `http://localhost:5000${routes.AUTH_LOGIN}`

        await axios
            .post(url, {
                email: email,
                password: password
            })
            .then((res) => {
                result = res.data.token
            })
            .catch((error) => {
                console.log(error)
                    error.response.data.map((val: string) => new Toaster({msg: `${val}`, type: toast.TYPE.WARNING}))
                }
            )
            .then(() => {

            })

        // @ts-ignore
        return result
    },

    async postAuthRegistration(email: string, password: string): Promise<string> {

        let result: string
        const url = `http://localhost:5000${routes.AUTH_REGISTRATION}`

        await axios
            .post(url, {
                email: email,
                password: password
            })
            .then((res) => {
                result = res.data.token
            })
            .catch((error) => {
                    error.response.data.map((val: string) => new Toaster({msg: `${val}`, type: toast.TYPE.WARNING}))
                }
            )
            .then(() => {

            })

        // @ts-ignore
        return result
    },
    async getApiPosts(): Promise<Posts[]> {

        let result: Posts[] = []
        const url = `http://localhost:5000${routes.POSTS}`

        await axios
            .get(url)
            .then((res) => {
                result = res.data
            })
            .catch((error) => {
                    error.response.data.map((val: string) => new Toaster({msg: `${val}`, type: toast.TYPE.WARNING}))
                }
            )
            .then(() => {

            })


        return result
    },
    async postApiPosts(post: {}): Promise<number> {

        let result: number = 0
        const url = `http://localhost:5000${routes.POSTS}`

        await axios
            .post(url, post)
            .then((res) => {
                result = res.status
            })
            .catch((error) => {
                    // error.response.data.map((val: string) => new Toaster({msg: `${val}`, type: toast.TYPE.WARNING}))
                }
            )
            .then(() => {

            })


        return result
    },
    async getApiAllUsers(token: string): Promise<User[]> {

        let result: User[] = []
        const url = `http://localhost:5000${routes.USERS}`

        await axios
            .get(url, {
                headers: {
                    "Authorization": `Bearer ` + token,
                }
            })
            .then((res) => {
                result = res.data
            })
            .catch((error) => {
                    console.log(error)
                    error.response.data.map((val: string) => new Toaster({msg: `${val}`, type: toast.TYPE.WARNING}))
                }
            )
            .then(() => {

            })


        return result
    },
    async postBanUser(token: string, data: {}): Promise<number> {

        let result: number = 0
        const url = `http://localhost:5000${routes.USERS}/ban`

        await axios
            .post(
                url,
                data,
                {
                    headers: {
                        "Authorization": `Bearer ` + token,
                    }
                }
            )
            .then((res) => {
                result = res.data
            })
            .catch((error) => {
                    console.log(error)
                    error.response.data.map((val: string) => new Toaster({msg: `${val}`, type: toast.TYPE.WARNING}))
                }
            )
            .then(() => {

            })


        return result
    },
    async postApiAddRole(token: string, data: {}): Promise<number> {

        let result: number = 0
        const url = `http://localhost:5000${routes.USERS}/role`

        await axios
            .post(
                url,
                data,
                {
                    headers: {
                        "Authorization": `Bearer ` + token,
                    }
                }
            )
            .then((res) => {
                result = res.data
            })
            .catch((error) => {
                    console.log(error)
                    error.response.data.map((val: string) => new Toaster({msg: `${val}`, type: toast.TYPE.WARNING}))
                }
            )
            .then(() => {

            })


        return result
    },
}
