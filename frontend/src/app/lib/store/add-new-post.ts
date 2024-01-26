import {makeAutoObservable} from "mobx";
import services from "../services/services";
import searchStore from "./search-store";


interface IAddNewPostStore{
    title: string
    content: string
    description: string
    userId?: number
    alert: any

}

class AddNewPostStore implements IAddNewPostStore {
    title = ''
    content = ''
    description = ''
    userId ?= 0
    alert: ''

    constructor() {
        makeAutoObservable(this)
    }

    setTitle(val: string) {
        this.title = val
    }

    setContent(val: string) {
        this.content = val
    }

    setDesc(val: string) {
        this.description = val
    }

    setUserId(val: number) {
        this.userId = val
    }

    createdPost() {
        services
            .postApiPosts({title: this.title, content: this.content, description: this.description, userId: this.userId})
            .then((val) => {
                if (val === 201) {
                    searchStore.getPosts()
                }
            })
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AddNewPostStore()
