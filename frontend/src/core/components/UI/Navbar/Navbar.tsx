import {observer} from "mobx-react-lite"
import {ReactNode, useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import routes from "../../../../app/lib/routes";
import './Navbar.scss'
import IconStore from "../../Icons/IconStore";
import {useLocalStorage} from "usehooks-ts";
import {useJwt} from "react-jwt";

interface Interface {
    children: ReactNode
}

export default observer(({children}: Interface) => {
    const [stateCheckbox, setStateCheckbox] = useState(false)

    const [pathName, setPathName] = useState('')
    const [token] = useLocalStorage('_token', '')
    const {decodedToken} = useJwt<any>(token);
    const path = useLocation().pathname

    useEffect(() => {
        setPathName(path)
    }, [path])

    const onChangeStateCheckbox = () => {
        setStateCheckbox(!stateCheckbox)
    }

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" onClick={onChangeStateCheckbox} className="drawer-toggle"
                   checked={stateCheckbox}/>
            <div className="drawer-content">
                <div className="navbar lg:hidden sticky top-0 z-20">
                    <div className="navbar-start">
                        <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h7"/>
                            </svg>

                        </label>
                    </div>
                    <div className="navbar-center">
                        <Link to={routes.HOME} className="btn btn-ghost normal-case text-xl"></Link>
                    </div>
                    <div className="navbar-end"/>
                </div>
                <div className='p-4 h-full'>
                    {children}
                </div>
            </div>
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-2" aria-label="close sidebar"
                       className="drawer-overlay"></label>
                <ul tabIndex={12} className="menu p-4 w-64 min-h-full text-base-content">
                    <li>
                        <Link
                            onClick={onChangeStateCheckbox}
                            to={routes.HOME}
                            className={`${pathName.includes(routes.HOME) ? 'custom__active' : 'custom__inactive'}`}>
                            <i className={`${IconStore.file} ${pathName.includes(routes.HOME) ? 'custom__active__icon' : 'custom__inactive__icon'}`}></i>
                            Главная
                        </Link>
                    </li>
                    {
                        !decodedToken ? <li>
                                <Link
                                    onClick={onChangeStateCheckbox}
                                    to={routes.LOGIN}
                                    className={`${pathName.includes(routes.LOGIN) ? 'custom__active' : 'custom__inactive'}`}>
                                    <i className={`${IconStore.user} ${pathName.includes(routes.LOGIN) ? 'custom__active__icon' : 'custom__inactive__icon'}`}></i>
                                    Аккаунт
                                </Link>
                            </li>
                            :
                            decodedToken.roles[0].value === 'ADMIN' ?
                                <div>
                                    <li>
                                        <Link
                                            onClick={onChangeStateCheckbox}
                                            to={routes.ADMIN}
                                            className={`${pathName.includes(routes.ADMIN) ? 'custom__active' : 'custom__inactive'}`}>
                                            <i className={`${IconStore.user} ${pathName.includes(routes.ADMIN) ? 'custom__active__icon' : 'custom__inactive__icon'}`}></i>
                                            Аккаунт
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={onChangeStateCheckbox}
                                            to={routes.ADD_NEW_POSTS}
                                            className={`${pathName.includes(routes.ADD_NEW_POSTS) ? 'custom__active' : 'custom__inactive'}`}>
                                            <i className={`${IconStore.filerPen} ${pathName.includes(routes.ADD_NEW_POSTS) ? 'custom__active__icon' : 'custom__inactive__icon'}`}></i>
                                            Написать статью
                                        </Link>
                                    </li>
                                </div>
                                :
                                decodedToken.roles[0].value === 'USER' ?
                                    <div>
                                        <li>
                                            <Link
                                                onClick={onChangeStateCheckbox}
                                                to={routes.USERS}
                                                className={`${pathName.includes(routes.USERS) ? 'custom__active' : 'custom__inactive'}`}>
                                                <i className={`${IconStore.user} ${pathName.includes(routes.USERS) ? 'custom__active__icon' : 'custom__inactive__icon'}`}></i>
                                                Аккаунт
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={onChangeStateCheckbox}
                                                to={routes.ADD_NEW_POSTS}
                                                className={`${pathName.includes(routes.ADD_NEW_POSTS) ? 'custom__active' : 'custom__inactive'}`}>
                                                <i className={`${IconStore.filerPen} ${pathName.includes(routes.ADD_NEW_POSTS) ? 'custom__active__icon' : 'custom__inactive__icon'}`}></i>
                                                Написать статью
                                            </Link>
                                        </li>
                                    </div>
                                    :
                                    null
                    }
                </ul>
            </div>
        </div>
    )
})
