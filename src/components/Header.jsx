import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'
const Header = () => {

    const hideSideBar = () => {
    const sideBar = document.querySelector('.navLinks')
    sideBar.style.display = 'none'
    }   
    const showSideBar = () => {
    const showBar = document.querySelector('.navLinks')
     showBar.style.display = 'block'
    }


  return (
    <>
        <div className='navbar'>
            <div className='nav_title'>
                <h2> Sevitor Services</h2>
            </div>
            <div className='nav-Line'>
                <div className='navLinks'>
                    <div onClick={() => hideSideBar()} >
                        <a href= "#" class= "nav-link" className='closeBtn'><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
                    </div>
                    <div  className='LINKS'>
                        <Link to='/'  className='links'>Home</Link>
                    </div>
                    <div  className='LINKS about'>
                        <Link to='/about' className='links'>About Us</Link>
                    </div>
                    <div className='LINKS'>
                        <Link to='/services' className='links'>Services</Link>
                    </div>
                    <div className='LINKS'>
                        <Link to='/blog' className='links'>Blog</Link>
                    </div>
                    <div className='LINKS'>
                        <Link to='/contact' className='links'>Contact</Link>
                    </div>
                    <div>
                    <button className='sideBarBookingBtn'>
                        Book schedule
                    </button>
                </div>
                </div>
                <div>
                    <button className='navBtn'>
                    &#9658;
                        Book schedule
                    </button>
                </div>
            <div onClick={() => showSideBar()} className='Showbtn'>
                <a  href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
            </div>
            </div>
        </div>
    </>
  )
}

export default Header