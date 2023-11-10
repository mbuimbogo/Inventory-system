import React from "react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 border border-gray-200 ">
    <div className="bg-gray-300 p-6 box-border rounded shadow">
      <p>Are you sure you want to delete this book?</p>
      <div className="flex flex-row justify-between mt-4">
      <button onClick={onConfirm} className="bg-green-500 p-3 rounded-md cursor-pointer hover:bg-green-700">Confirm</button>
      <button onClick={onClose} className="bg-gray-500 p-3 rounded-md cursor-pointer hover:bg-gray-700">Cancel</button>
      </div>
     
    </div>
  </div>
  
  );
};

export default ConfirmationModal;
