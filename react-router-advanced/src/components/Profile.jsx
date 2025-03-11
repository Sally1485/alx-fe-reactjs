import {Link, Routes, Route} from  'react-router-dom';
function Profile() {
  return (
    <div>
        <Link to="profileSettings">ProfileSettings</Link>
        <Link to="profileDetails">ProfileDetails</Link>
        <Routes>
          <Route path= '/profileDetails' element={<ProfileDetails/>} />
          <Route path= '/profileSettings' element={<ProfileSettings/>} />
        </Routes>
    </div>
  )
}

export default Profile;