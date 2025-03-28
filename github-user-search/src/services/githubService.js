import React, { useState, useEffect } from "react";

function FetchUserData({ username }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return; // Prevent fetching if no username is provided

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("Looks like we cant find the user");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setError(null);
      })
      .catch((error) => {
        console.error("Looks like we cant find the user:", error);
        setError(error.message);
        setUser(null);
      });
  }, [username]);

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : user ? (
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">Username: {user.login}</p>
          <img
            src={user.avatar_url}
            alt="Avatar"
            width="100"
            className="rounded-full mt-2"
          />
          <p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View GitHub Profile
            </a>
          </p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default FetchUserData;
