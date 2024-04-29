import React from 'react'


export default function Navbar() {
  return (
   <>
   <nav>
    <div className="Navbar">
        <h1>KEEP</h1>
        <div className="search">
          <div className="search-box">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder='search here' />
        </div>
        <button type='search'>Search</button>
        </div>
        
    </div>
   </nav>
   </>
  )
}
