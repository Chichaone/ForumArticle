import {observer} from "mobx-react-lite"
import React from "react";
import './ReadPosts.scss'
import readPostsStore from "../../../lib/store/read-posts-store";
import {Link} from "react-router-dom";
import routes from "../../../lib/routes";

export default observer(() => {

    return (
        <div className='posts'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{readPostsStore.dataPosts.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: readPostsStore.dataPosts.content }}/>
                    <div className="card-actions justify-end">
                        <Link  to={routes.HOME} className="btn btn-neutral">Вернуться на главную</Link>
                    </div>
                </div>
            </div>
        </div>
    )
})
