import React from "react";
import './Card.scss'
import {Posts} from "../../../lib/models/Posts";
import routes from "../../../lib/routes";
import {Link} from "react-router-dom";
import searchStore from "../../../lib/store/search-store";
import readPostsStore from "../../../lib/store/read-posts-store";

interface ICard {
    data: Posts
}

const Card = ({data}: ICard) => {

    const onCLickDataPosts = () => {
        readPostsStore.setDataPosts(data);
    }

    return (
        <div className='home'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{data.title}</h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <Link onClick={onCLickDataPosts}
                              to={`${routes.HOME}/${data.id}`}
                              className="btn btn-neutral">
                            Читать
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
