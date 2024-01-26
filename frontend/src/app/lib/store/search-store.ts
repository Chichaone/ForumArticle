import {makeAutoObservable} from "mobx";
import services from "../services/services";
import {Posts} from "../models/Posts";


interface ISearchStore {
    value: string
    dataPosts: Posts[]
}

class SearchStore implements ISearchStore {
    value = ''
    dataPosts: Posts[] = []

    constructor() {
        makeAutoObservable(this)
    }

    setValue(val: string) {
        this.value = val
    }

    setDataPosts(val: Posts[]) {
        this.dataPosts = val
    }

    getPosts() {
        services
            .getApiPosts()
            .then((val) => {
                this.setDataPosts(val)
            })
    }
}

export default new SearchStore()
