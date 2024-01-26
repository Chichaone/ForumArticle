import {Global, IGlobal} from "../../../core/model/models/global";
import {UserRole} from "./UserRole";


export interface IUser extends IGlobal {
    email: string;
    banReason:string
    banned:boolean
    id: number;
    roles: UserRole[];
    iat: number;
    exp: number;
}

export class User extends Global<IUser, User> implements IUser {
    email: string;
    banReason:string
    banned:boolean
    id: number;
    roles: UserRole[];
    iat: number;
    exp: number;

    constructor(obj: IUser) {
        super(obj)
        this.roles = obj.roles.map((s) => new UserRole(s))
    }
}