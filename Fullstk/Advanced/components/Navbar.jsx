import React from 'react'

const Navbar = () => {
  return (
      <nav className="flex justify-between bg-white shadow-md px-6 py-3">
      {/* Logo */}
    <img className="h-10 w-auto align-middle rounded" src="https://press-release-v1.s3.ap-south-1.amazonaws.com/order/5765/1715601023560_content_img.png" alt="Descriptive text"/>

      

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Search */}
        <div className="flex items-center space-x-2 border rounded-lg px-3 py-1 focus-within:ring focus-within:ring-blue-300">
          <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
          <input
            type="text"
            placeholder="Search..."
            className="outline-none"
          />
        </div>

        {/* Notification */}
        <button className="text-gray-600 hover:text-blue-500">
          <i className="fa-regular fa-bell text-xl"></i>
        </button>

        {/* User Icon */}
        <button className="text-gray-600 hover:text-blue-500">
          <i className="fa-solid fa-circle-user text-xl"></i>
        </button>
      </div>
    </nav>
    
  )
}

export default Navbar
