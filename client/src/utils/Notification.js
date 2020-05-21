import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const success = (message) => toast.success(message, {
    position: "top-center",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

const fail = (message) => toast.error(message, {
    position: "top-center",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});


const Notification = {
    fail,
    success
};
  
export default Notification;