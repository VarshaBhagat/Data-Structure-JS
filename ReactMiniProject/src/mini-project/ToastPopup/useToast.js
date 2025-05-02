import { useState } from "react";

const useToast = () => {
  const [horizontalPosition, setHorizontalPosition] = useState("left");
  const [verticalPosition, setVerticalPosition] = useState("top");
  const [type, setType] = useState("normal");
  const [msg, setMsg] = useState("This is a toast message!");
  const [duration, setDuration] = useState(5);
  const [toasMsg, setToasMsg] = useState([]);
  const showToast = () => {
    setToasMsg((prev)=>[...prev,{horizontalPosition, verticalPosition, type, msg, duration}]);
  };
const removeToast =(msg)=>{
    setToasMsg(() => toasMsg.filter((i) => i.msg !== msg));
}
  return {
    showToast,
    horizontalPosition,
    setHorizontalPosition,
    verticalPosition,
    setVerticalPosition,
    type,
    setType,
    msg,
    setMsg,
    duration,
    setDuration,
    toasMsg,
    removeToast
  };
};
export default useToast;
