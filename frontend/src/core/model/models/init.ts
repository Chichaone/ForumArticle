import {nanoid} from 'nanoid'

export interface IInit {
    id?: string | number
}

export class Init<I, T> implements IInit {
    id?: string | number

    private _init? = (obj: IInit, isCheckReset = true): this => {
        const excludedList = ['id']

        Object.keys(obj).map((key: string) => {
            if (excludedList.indexOf(key) < 0) {
                // if (key.toLowerCase().includes('date')) {
                //     this[key] = toDateBackend(obj[key])
                // } else
                // @ts-ignore
                if (typeof this[key] !== 'function' && typeof this[key] !== 'object') {
                    // @ts-ignore
                    this[key] = obj[key]
                    // @ts-ignore
                } else if (isCheckReset && typeof this[key] === 'object' && typeof this[key].resetInit === 'function') {
                    // @ts-ignore
                    this[key] = this[key].resetInit<I, T>(obj[key])
                }
            }
        })

        return this
    }

    constructor(obj: IInit) {
        this.id = obj && obj.id ? obj.id : nanoid()
        // @ts-ignore
        obj && this._init(obj)
    }

    resetInit?(obj: I, isCheckReset?: boolean): this {
        // @ts-ignore
        return this._init(obj, isCheckReset)
    }
}
