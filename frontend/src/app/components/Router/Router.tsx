import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import React from 'react'
import {observer} from 'mobx-react-lite'
import routes from "../../lib/routes";
import Navbar from "../../../core/components/UI/Navbar/Navbar";
import Home from "../Home/Home";
import Posts from "../pages/AddNewPost/AddNewPost";
import Login from "../pages/Account/Login/Login";
import ReadPosts from "../pages/ReadPosts/ReadPosts";
import AddNewPost from "../pages/AddNewPost/AddNewPost";
import Registration from "../pages/Account/Registration/Registration";
import Admin from "../UI/Admin/Admin";
import User from "../UI/User/User";

export default observer(() => {
    return (
        <HashRouter basename={'/'}>
            <Navbar>
                <Switch>
                    <Route exact path={routes.HOME} component={Home}/>
                    <Route exact path={routes.LOGIN} component={Login}/>
                    <Route exact path={routes.REGISTRATION} component={Registration}/>
                    <Route exact path={routes.ADMIN} component={Admin}/>
                    <Route exact path={routes.USERS} component={User}/>
                    <Route exact path={routes.POSTS} component={Posts}/>
                    <Route exact path={routes.ADD_NEW_POSTS} component={AddNewPost}/>
                    <Route exact path={`${routes.HOME}/:id`} component={ReadPosts}/>

                    <Redirect from="*" to={routes.HOME}/>
                </Switch>
            </Navbar>
        </HashRouter>
    )
})

