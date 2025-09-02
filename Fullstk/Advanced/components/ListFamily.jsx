import React, { useState } from "react";

const ListFamily = () => {
  const [familyArr, showFamily] = useState([]);

  function handleRefresh() {
    fetch("http://localhost:8080/api/family")
      .then((res) => {
        console.log(res.status);
        //res.json is sent to next then
        return res.json();
        //then data can be viewed first promise(res)
        //then http response conversion(data)
      })
      .then((data) => {
        console.log(data);
        showFamily(data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="p-10 ">
      <div className="space-y-3">
        {familyArr.map((member) => (
          <div
            key={member._id}
            className={`p-4 rounded-2xl shadow-sm border transition-colors duration-300 ${
              member.status === "living"
                ? "hover:bg-green-100"
                : "hover:bg-red-100"
            }`}
          >
            <div className="flex items-center justify-between p-4 ">
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {member.firstName}{" "}
                  {member.middleName && <span>{member.middleName}</span>}{" "}
                  {member.surname}
                </p>
                <p className="text-sm italic text-gray-600">
                  {member.relationship} ({member.status})
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleRefresh}
        className="mt-10 w-full bg-blue-600 text-white py-2 rounded-2xl shadow hover:bg-blue-700 transition"
      >
        Refresh
      </button>
    </div>
  );
};

export default ListFamily;
