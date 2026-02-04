import { useEffect } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "./Toast.css";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`toast-notification toast-${type} position-fixed d-flex align-items-center gap-3 p-4 rounded-3`}
    >
      <div className="toast-icon fs-3">
        {type === "success" ? <FaCheckCircle /> : <FaTimesCircle />}
      </div>
      <span className="toast-message fs-5">{message}</span>
    </div>
  );
}

export default Toast;
