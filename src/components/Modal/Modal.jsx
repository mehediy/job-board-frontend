import React, { useState } from "react";
import Button from "../buttons/Button";

function Modal({ fn }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={openModal}
        className="font-medium text-blue-600  hover:underline"
      >
        Delete
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
          <div className="modal-container relative">
            <div className="bg-white w-full max-w-sm mx-auto rounded shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Delete confirmation
              </h2>
              <p className="text-gray-700">Are you sure?</p>
              <div className="mt-4 space-x-4">
                <Button
                  className={"hover:bg-error hover:border-error"}
                  variant={"outline"}
                  label={"Delete"}
                  onClick={() => {
                    fn(), closeModal();
                  }}
                />

                <Button
                  variant={"accent"}
                  label={"Close"}
                  onClick={closeModal}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
