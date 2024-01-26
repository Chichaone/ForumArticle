import {observer} from "mobx-react-lite"
import './App.scss'
import Router from "../Router/Router";
import {useEffect} from "react";
import {ToastContainer} from "react-toastify";
import authStore from "../../lib/store/auth-store";
import {useJwt} from "react-jwt";
import {useLocalStorage} from "usehooks-ts";
import searchStore from "../../lib/store/search-store";
import decodedUsersData from "../../lib/store/decoded-users-data";

export default observer(() => {
    const [token] = useLocalStorage('_token', '')
    const {decodedToken, isExpired} = useJwt<any>(token);

    useEffect(() => {
        decodedUsersData.setEmail(decodedToken === null ?
            ''
            :
            decodedToken.email)
        decodedUsersData.setRole(decodedToken === null ?
            ''
            :
            decodedToken.roles[0].value)
        decodedUsersData.setUserId(decodedToken === null ?
            ''
            :
            decodedToken.id)
    })

    useEffect(() => {
        authStore.setToken(token)
        searchStore.getPosts()
    }, [token])

    return (
        <div>
            <ToastContainer/>
            <Router/>
        </div>
    )
})
