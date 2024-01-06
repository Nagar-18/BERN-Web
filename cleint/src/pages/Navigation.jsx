import React from 'react'
import {Link} from 'react-router-dom'
const Navigation = () => {
  return (
    <div className="topnav">
  <Link className="active" to="/">Home</Link>
  <Link to="/view-task">ViewTask</Link>
  <Link to="/create-task">CreateTask</Link>
  <Link to="/update-task">UpdateTask</Link>
  <Link to="/view-alltask">allTask</Link>
  <Link to="/delete-task">DeleteTask</Link>
</div>
  )
}

export default Navigation
