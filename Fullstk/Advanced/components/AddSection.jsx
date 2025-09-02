import React, { useState } from 'react';
import AddPopUp from './AddPopUp';

const AddSection = () => {
    const [showPop, setShowPop] = useState(false);

    function handlePopUp(event){
        console.log(event)
        setShowPop(true);

    }
  return (
    <div className="flex items-center justify-between bg-blue-100 px-4 py-2 rounded-md shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800">My Family</h2>
      <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2" onClick={handlePopUp}>
<i className="fa-solid fa-users"></i>        Members
      </button>
      {showPop && <AddPopUp onClose={() => setShowPop(false)} />}
    </div>
  )
}

export default AddSection
