import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { updateUser } from "../api/endpoints";
import { successToast } from "../utils/toast";

const EditModal = ({ isOpen, onClose, userData, setState }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        username: userData.username || "",
        phone: userData.phone || "",
      });
    }
  }, [userData]);

  const handleSubmit = async () => {
    const data = await updateUser(userData.id, formData);
    console.log(data);
    successToast("User updated");
    onClose();
    // make dependency change
    setState((prev) => prev + 1);
  };

  return (
    <>
      {isOpen && (
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-slate-200 p-10 rounded-sm">
          <p className="text-lg text-center font-bold mb-4">User Update</p>
          <div className="flex flex-col gap-4 w-[300px]">
            <input
              type="text"
              placeholder="firstName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="defaultInput"
            />
            <input
              type="text"
              placeholder="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="defaultInput"
            />
            <input
              type="text"
              placeholder="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              className="defaultInput"
            />
            <input
              type="text"
              placeholder="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="defaultInput"
            />

            <button className="defaultButton" onClick={handleSubmit}>
              Update
            </button>
            <button className="defaultDelButton" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditModal;
