import React, { useState } from "react";
import axios from "axios";


// onUpload is a function passed 
// from the parent component to ProfileUploader as a proP


const ProfileUploader = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first!");

    const formData = new FormData();
    formData.append("picture", file); // backend expects "picture"

    try {
      const res = await axios.post("http://localhost:8080/api/picture", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const filePath = res.data.filePath;
      alert("Yes !!! Upload successful!");
      //THE LINE WHICH PASSES STRING
      if (onUpload) onUpload(filePath); // passing link back to parent 
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="p-4">
      <label className="flex items-center gap-2 cursor-pointer">
        <i className="fa-solid fa-circle-plus"></i>
        <span>Add a profile picture</span>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {preview && (
        <div className="mt-2">
          <img src={preview} alt="Preview" className="w-20 h-20 rounded-full object-cover" />
        </div>
      )}

      <button
        onClick={handleUpload}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </div>
  );
};

export default ProfileUploader;
