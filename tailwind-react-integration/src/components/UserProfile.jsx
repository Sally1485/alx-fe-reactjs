function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 max-w-sm mx-w-xs mx-auto my-20 rounded-lg shadow-lg p-4 sm:p-8 md:p-12"  >
        <img src="https://via.placeholder.com/150" alt="User" className="rounded-full w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 mx-auto"  />
        <h1  className="text-lg sm:text-xl md:text-2xl text-blue-800 my-4">John Doe</h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-xl"  >Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;