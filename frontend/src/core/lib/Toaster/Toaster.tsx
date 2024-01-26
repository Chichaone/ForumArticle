import 'animate.css'
import {cssTransition, toast, TypeOptions} from 'react-toastify'
import './Toaster.scss'
import 'react-toastify/dist/ReactToastify.css';

const fade = cssTransition({
    enter: "animate__animated animate__fadeInRight",
    exit: "animate__animated animate__fadeOutRight",
})
const msgs: any = []

interface IToaster {

    msg: string
    type: TypeOptions
}

class Toaster implements IToaster {
    msg = ''
    toastId = ''
    type: TypeOptions = toast.TYPE.INFO

    constructor(obj: IToaster) {
        this.msg = obj.msg
        this.type = obj.type
        this.notify(obj.msg, obj.type)
    }

    notify(msg: string, type?: TypeOptions): void {

        // @ts-ignore
        this.toastId = toast(msg, {
            type: type, autoClose: 10000, transition: fade, position: "top-right",
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })

        if (msgs.length > 2) {
            msgs.forEach((id: number) => {
                toast.dismiss(id)
            })

            msgs.splice(0, msgs.length)
        }

        msgs.push(this.toastId)
    }
}

export default Toaster