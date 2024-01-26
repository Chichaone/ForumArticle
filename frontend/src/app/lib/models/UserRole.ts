
import {Global, IGlobal} from "../../../core/model/models/global";


export interface IUserRole extends IGlobal {
    id: number;
    value: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    UserRoles: {
        id: number;
        roleId: number;
        userId: number;
        description:string
    };
}

export class UserRole extends Global<IUserRole, UserRole> implements IUserRole {
    id: number;
    value: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    UserRoles: {
        id: number;
        roleId: number;
        userId: number;
        description:string
    };

    constructor(obj: IUserRole) {
        super(obj)

    }
}