import React from 'react'


const Navbar = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div id="navbar">
          <div id="logo">
            <p>Logo</p>
          </div>
          <div id="center">
            {/* <input type="search" /> */}
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          </div>
          <div id="right">
            <button className='btn btn-outline-danger'>Sign Up</button>
            <button className='btn btn-outline-danger'>Sign In</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar