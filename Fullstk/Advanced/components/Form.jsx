import React, { useState, useEffect } from "react";
import ProfileUploader from "./ProfileUploader";

//HERE PHOTO UPLOADED AND PUT IN FILE AND STRING STORED IN OBJECT FORMDATA

const OutlinedInput = ({ label, name, type = "text", value, onChange }) => (
  <div className="relative w-full">
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="peer w-full border rounded px-3 pt-5 pb-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
      placeholder=" "
    />
    <label
      htmlFor={name}
      className="absolute top-0 left-2 -translate-y-1/2 bg-white px-1 text-gray-400 text-sm pointer-events-none peer-focus:text-blue-500"
    >
      {label}
    </label>
  </div>
);

const OutlinedSelect = ({ label, name, value, onChange, options }) => (
  <div className="relative w-full">
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border rounded px-3 pt-5 pb-2 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white appearance-none"
    >
      <option value=""></option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    <label
      htmlFor={name}
      className="absolute top-0 left-2 -translate-y-1/2 bg-white px-1 text-gray-400 text-sm pointer-events-none"
    >
      {label}
    </label>
  </div>
);

const Form = ({ onFormChange }) => {
  const [formData, setFormData] = useState({
    relationship: "",
    firstName: "",
    middleName: "",
    surname: "",
    status: "living",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    birthPlace: "",
    currentPlace: "",
    profilePicture: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
  };

  // handle profile upload
  const handleProfileUpload = (filePath) => {
    const newData = { ...formData, profilePicture: filePath };
    setFormData(newData);
  };

  // Check validity (only required fields)
  const isValid =
    formData.relationship.trim() &&
    formData.firstName.trim() &&
    formData.surname.trim();

  // Notify parent on every change
  useEffect(() => {
    onFormChange(formData, Boolean(isValid));
  }, [formData, isValid, onFormChange]);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md space-y-4">
      {/* Profile Picture */}
      <div className="flex items-center space-x-2 text-blue-600 cursor-pointer">
        <ProfileUploader onUpload={handleProfileUpload} />
      </div>

      <OutlinedInput
        label="Relationship type *"
        name="relationship"
        value={formData.relationship}
        onChange={handleChange}
      />
      <OutlinedInput
        label="First Name *"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <OutlinedInput
        label="Middle Name"
        name="middleName"
        value={formData.middleName}
        onChange={handleChange}
      />
      <OutlinedInput
        label="Surname *"
        name="surname"
        value={formData.surname}
        onChange={handleChange}
      />

      {/* Status */}
      <div className="relative w-full border rounded px-3 pt-5 pb-2">
        <label className="absolute -top-2 left-2 bg-white px-1 text-gray-400 text-sm pointer-events-none">
          Status
        </label>
        <div className="flex space-x-6 pt-1">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="status"
              value="living"
              checked={formData.status === "living"}
              onChange={handleChange}
              className="form-radio text-blue-600"
            />
            <span>Living</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="status"
              value="deceased"
              checked={formData.status === "deceased"}
              onChange={handleChange}
              className="form-radio text-blue-600"
            />
            <span>Deceased</span>
          </label>
        </div>
      </div>

      {/* Birth Date */}
      <div className="text-gray-400 text-sm">Birth Date</div>
      <div className="grid grid-cols-3 gap-3">
        <OutlinedInput
          label="Year"
          name="birthYear"
          value={formData.birthYear}
          onChange={handleChange}
        />
        <OutlinedSelect
          label="Month"
          name="birthMonth"
          value={formData.birthMonth}
          onChange={handleChange}
          options={[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ]}
        />
        <OutlinedSelect
          label="Day"
          name="birthDay"
          value={formData.birthDay}
          onChange={handleChange}
          options={Array.from({ length: 31 }, (_, i) => i + 1)}
        />
        
      </div>

      <OutlinedInput
        label="Birth Place"
        name="birthPlace"
        value={formData.birthPlace}
        onChange={handleChange}
      />
      <OutlinedInput
        label="Current Place"
        name="currentPlace"
        value={formData.currentPlace}
        onChange={handleChange}
      />
    </div>
  );
};

export default Form;
