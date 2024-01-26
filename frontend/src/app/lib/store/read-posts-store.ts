import {makeAutoObservable} from "mobx";
import services from "../services/services";
import {Posts} from "../models/Posts";


interface IReadPostsStore {
    dataPosts: Posts

}

class ReadPostsStore implements IReadPostsStore {
    dataPosts: Posts

    constructor() {
        makeAutoObservable(this)
    }

    setDataPosts(val: Posts) {
        this.dataPosts = val
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ReadPostsStore()
