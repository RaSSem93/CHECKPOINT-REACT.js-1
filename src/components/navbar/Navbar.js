import React from 'react'

const Navbar = () => {
  return (
    <div class="Navbar">
        <div class="toggle-btn"> 
            <span></span>
            <span></span>
            <span></span>

        </div>
        <img src="https://www.meilleure-innovation.com/wp-content/uploads/2021/07/logo-youtube-une.png" class="logo" alt="logo"/>
        <div class="search-box"> 
        <input type="text" class="search-bar" placeholder='search'/>
            <button class=" button-btn"><img src="logo-finder-png.png" alt="finder"/></button>
        </div>
        <div class="user-options">
            <img src="bell.png" class="icon" alt="l1"/>
            <img src="video.png" class="icon" alt="l2"/>
            <img src="grid.png" class="icon" alt="l3"/>

        </div>
    </div>
  )
}

export default Navbar