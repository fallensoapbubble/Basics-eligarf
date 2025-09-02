import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    relationship: '',
    firstName: '',
    middleName: '',
    surname: '',
    status: '',
    birthDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChange2 = (event) => {
    let fieldName = event.target.name;
    let newVal = event.target.value;


    setFormData(currVal=>{
      return {...currVal, [fieldName]: newVal}
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold mb-4">Relationship Details</h2>

      <div>
        <label className="block mb-1 font-medium">Relationship Type</label>
        <select
          name="relationship"
          value={formData.relationship}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Select</option>
          <option value="parent">Parent</option>
          <option value="sibling">Sibling</option>
          <option value="spouse">Spouse</option>
          <option value="child">Child</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 font-medium">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Middle Name</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Surname</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Select</option>
          <option value="living">Living</option>
          <option value="deceased">Deceased</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Birth Date</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
