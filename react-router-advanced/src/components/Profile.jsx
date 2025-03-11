import {Link} from  'react-router-dom';
function Profile() {
  return (
    <div>
        <Link to="profileSettings">ProfileSettings</Link>
        <Link to="profileDetails">ProfileDetails</Link>
    </div>
  )
}

export default Profile;