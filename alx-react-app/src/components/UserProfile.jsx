import React from "react";
import UserProfile from "./components/UserProfile";
const UserProfile = (props) => {
    return(
        <div>
            <h2>name:{props.name}</h2>
            <p>age: {props.age}</p>
            <p>bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;