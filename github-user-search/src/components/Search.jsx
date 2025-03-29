import React, { useState } from "react";
import { searchUsers } from "../services/githubService";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [formData, setFormData] = useState({
    username: "",
    location: "",
    repos: "",
  });

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const results = await searchUsers({ 
        username: formData.username, 
        location: formData.location, 
        repos: formData.repos, 
        page 
      });
      setUsers(results);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const loadMore = async () => {
    setLoading(true);
    setPage((prevPage) => prevPage + 1);

    try {
      const results = await searchUsers({
        username: formData.username,
        location: formData.location,
        repos: formData.repos,
        page: page + 1,
      });

      setUsers((prevUsers) => [...prevUsers, ...results]);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Search GitHub Users</h2>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="border p-2 m-2 w-full"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="border p-2 m-2 w-full"
        />
        <input
          type="number"
          name="repos"
          placeholder="Min Repositories"
          value={formData.repos}
          onChange={handleChange}
          className="border p-2 m-2 w-full"
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div>
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="p-4 border-b flex items-center">
              <img 
                src={user.avatar_url} 
                alt={user.login} 
                className="h-12 w-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{user.login}</h3>
                <p className="text-gray-600">
                  Location: {user.location || "N/A"}
                </p>
                <p className="text-gray-600">Repos: {user.public_repos || "N/A"}</p>
                <a 
                  href={user.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No users found.</p>
        )}
      </div>

      {users.length > 0 && (
        <button 
          onClick={loadMore} 
          className="mt-4 bg-gray-300 p-2 rounded w-full"
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}

export default Search;
