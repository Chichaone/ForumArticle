import {observer} from "mobx-react-lite"
import React from "react";
import './AddNewPost.scss'
import addNewPost from "../../../lib/store/add-new-post";
import {useLocalStorage} from "usehooks-ts";
import Toaster from "../../../../core/lib/Toaster/Toaster";
import {toast} from "react-toastify";
import decodedUsersData from "../../../lib/store/decoded-users-data";
import searchStore from "../../../lib/store/search-store";

export default observer(() => {

    const [token] = useLocalStorage('_token', '')
    const arrayTitle = searchStore.dataPosts.map((value) => (
        value.title
    ))

    const onClickCreatedPost = () => {
        if(addNewPost.title === '' || addNewPost.content === '' || addNewPost.description === ''){
            new Toaster({msg: `Заполните все поля!`, type: toast.TYPE.WARNING})
        if (arrayTitle.includes(addNewPost.title)){
            new Toaster({msg: `Статья с таким название уже существует!`, type: toast.TYPE.WARNING})
        }
        }else {
            addNewPost.setUserId(decodedUsersData.userId)
            addNewPost.createdPost()
            new Toaster({msg: `Ваша статья опубликована!`, type: toast.TYPE.SUCCESS})
            addNewPost.title = '';
            addNewPost.content = '';
            addNewPost.description = '';
        }
    }

    return (
        <div className='posts'>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Название статьи</span>
                </div>
                <textarea value={addNewPost.title}
                          onChange={(event) => addNewPost.setTitle(event.target.value)}
                          className="textarea textarea-bordered h-24" placeholder="Введите текст"></textarea>
            </label>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Краткое описание статьи</span>
                </div>
                <textarea value={addNewPost.description}
                          onChange={(event) => addNewPost.setDesc(event.target.value)}
                          className="textarea textarea-bordered h-24" placeholder="Введите текст"></textarea>
            </label>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Статья</span>
                </div>
                <textarea value={addNewPost.content}
                          onChange={(event) => addNewPost.setContent(event.target.value)}
                          className="textarea textarea-bordered h-24" placeholder="Введите текст"></textarea>
            </label>
            <button onClick={onClickCreatedPost} className="btn btn-block btn-neutral">Опубликовать статью</button>
        </div>
    )
})
