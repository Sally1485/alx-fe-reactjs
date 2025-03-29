import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q={query}";

/**
 * Fetch user data by username
 * @param {string} username - The GitHub username
 */
export const fetchUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("Looks like we can't find the user.");
  }
};

/**
 * Search for users with advanced filtering
 * @param {Object} filters - Search filters (e.g., location, repos)
 * @returns {Array} - List of matching users
 */
export const searchUsers = async (filters) => {
  try {
    let query = [];

    if (filters.username) query.push(`${filters.username} in:login`);
    if (filters.location) query.push(`location:${filters.location}`);
    if (filters.repos) query.push(`repos:>${filters.minRepos}`);

    const queryString = query.join("+");
    const response = await axios.get(`${BASE_URL}/search/users?q=${queryString}`);

    return response.data.items; // GitHub Search API returns results in `items`
  } catch (error) {
    throw new Error("Failed to fetch search results. Try refining your query.");
  }
};
