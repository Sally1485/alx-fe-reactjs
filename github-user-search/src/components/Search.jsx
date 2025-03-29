import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [formData, setFormData] = useState({
    username: "",
  });

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`https://api.github.com/users/${formData.username}`);
      setUser(res.data);
      setError(null);
    } catch (err) {
      setError("Looks like we can't find the user.");
      setUser(null);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="username" className="block font-semibold">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter GitHub username"
          value={formData.username}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Search
        </button>
      </form>

      {/* Display User Data */}
      {error && <p className="text-red-500">{error}</p>}
      {user && (
        <div className="mt-4">
          <img src={user.avatar_url} alt="Avatar" className="rounded-full w-16 h-16 mb-2" />
          <h2 className="text-xl font-bold">{user.name || "No Name"}</h2>
          <p className="text-gray-600">@{user.login}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
