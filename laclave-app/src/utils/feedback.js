import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const config =  {
    position: "top-left",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
}


const feedback = (msg, level) => toast[level](msg, {
    ...config, 
    autoClose: (level === 'error')? false : 2000,
})

export default feedback