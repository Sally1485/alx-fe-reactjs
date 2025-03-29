import React from 'react'
import {useState} from 'react'

function Search() {
    const [formData, setFormData] = useState({
username: "",
avatar: "",
link: ""
    });
    
const handleChange =(e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
};
   

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('username',formData.username)
    }
  return (
   <form onSubmit={handleSubmit}>
    <label htmlFor="username">username:</label>
    <input type="text" name="username" id="username" placeholder="username" value={formData.username} onChange={handleChange} />
    <label htmlFor="avatar, ">user's avatar, :</label>
    <input type="text" name="avatar" id=" avatar" placeholder="avatar" value={formData.avatar} onChange={handleChange} />
    <label htmlFor="github-link">github-link:</label>
    <input type="text" name="github-link" id="github-link" placeholder="github-link" value={formData.link} onChange={handleChange} />
    <button>Search</button>
   </form>
  )
}

export default Search;
