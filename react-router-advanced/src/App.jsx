import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link}  from  'react-router-dom';
import BlogPosts from './BlogPosts';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  
  return (
    <>
    <Router>
      <Link to= 'profileDetails'>ProfileDetails</Link>
      <Link to= 'profileSettings'>ProfileSettings</Link>
      <Link to= 'blogPosts'>BlogPosts</Link>
      <Routes>
        <Route path='/profile' element={<ProtectedRoute component={Profile} isAuthenticated={isAuthenticated}/>} />
        <Route path = '/profileDetails' element={<ProtectedRoute component={ProfileDetails} isAuthenticated={isAuthenticated} />} />
        <Route path= '/profileSettings' element={<ProtectedRoute component={ProfileSettings} isAuthenticated={isAuthenticated} />} />
        <Route path= '/blog/:id' element={<ProtectedRoute component={BlogPosts} isAuthenticated={isAuthenticated} />} />
      </Routes>
    </Router>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
