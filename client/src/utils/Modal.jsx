import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Modal = ({ isOpen, onClose, children }) => {
  const { logout } = useContext(AuthContext);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={() => {
            logout();
            onClose();
          }}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
