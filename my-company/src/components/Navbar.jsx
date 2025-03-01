import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
<nav style={{ display:'flex', gap:'20px', padding:'10px' }}>
    <Link to='/' style={{fontSize:'20px', fontFamily:'sans-serif', color:'purple'}}>Home</Link>
<Link to='/about' style={{fontSize:'20px', fontFamily:'sans-serif', color:'purple'}}>About</Link>
<Link to='/services' style={{fontSize:'20px', fontFamily:'sans-serif', color:'purple'}}>Services</Link>
<Link to='/contacts' style={{fontSize:'20px', fontFamily:'sans-serif', color:'purple'}}>Contacts</Link>
</nav>
</div>
);
};
export default Navbar;