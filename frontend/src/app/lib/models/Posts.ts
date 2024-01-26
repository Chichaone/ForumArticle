import {Global, IGlobal} from "../../../core/model/models/global";


export interface IPosts extends IGlobal {
    id: number;
    title: string;
    content: string;
    description: string;
    userId: number;
    createdAt?: string;
    updatedAt?: string;
}

export class Posts extends Global<IPosts, Posts> implements IPosts {
    id: number;
    title: string;
    content: string;
    description: string;
    userId: number;
    createdAt?: string;
    updatedAt?: string;

    constructor(obj: IPosts) {
        super(obj)

    }
}