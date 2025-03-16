function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl p-2 sm:p-4 md:p-8"  >
        <img src="https://via.placeholder.com/150" alt="User" className="rounded-full w-12 h-12 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"  />
        <h1  className="text-lg sm:text-xl md:text-2xl text-blue-800 hover:text-blue-500 my-4">John Doe</h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-xl"  >Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;