import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";

const AddPopUp = ({ onClose }) => {
  const [formData, setFormData] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormChange = (data, valid) => {
    setFormData(data);
    setIsFormValid(valid);
  };

  const handleAddMember = async () => {
    console.log("Form data here:", formData);





    //ADD DATA IN CONSOLE TO MONGO

    const dataToSend = { ...formData };

    // handling joi date object
    if (formData.birthYear && formData.birthMonth && formData.birthDay) {
      const monthIndex = new Date(`${formData.birthMonth} 1, 2000`).getMonth(); // convert "March" → 2
      dataToSend.birthDate = new Date(
        formData.birthYear,
        monthIndex,
        formData.birthDay
      );
    }

    //remove from obj
    delete dataToSend.birthYear;
    delete dataToSend.birthMonth;
    delete dataToSend.birthDay;

    try {
      const res = await axios.post(
        "http://localhost:8080/api/family",
        dataToSend,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("✅ Saved:", res.data);
      alert("Member added successfully!");
      onClose();
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to save member");
    }










    
    onClose(); // close popup after submission if needed
  };

  return (
    <div className="fixed inset-0 bg-blue bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg max-w-lg w-full max-h-[700px] overflow-auto">
        {/* edit max-w-lg to max-w-xl   && max-h-[600 ya 700 px] */}
        <div className="flex items-center justify-between">
          <button
            onClick={onClose}
            className="mb-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-red-400 transition duration-300 ease-in-out flex items-center gap-2"
          >
            <i className="fa-solid fa-left-long"></i>
          </button>

          <h2 className="text-lg font-semibold mb-2 ml-4">Member Details</h2>

          <button
            onClick={handleAddMember}
            disabled={!isFormValid}
            className={`px-4 py-2 rounded-full shadow transition duration-300 ease-in-out 
              ${
                isFormValid
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
          >
            Add Member
          </button>
        </div>

        <Form onFormChange={handleFormChange} />
      </div>
    </div>
  );
};

export default AddPopUp;
