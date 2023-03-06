
import React from 'react';
import './Navbar.css';
import { useState } from 'react';
import {HiOutlineMenu, HiOutlineX} from 'react-icons/hi';

const Navbar = () => {

    const [mobile,setMobile] = useState(false);

  return (
    <nav>
    <div className="navbar">
        <span/>

        <div className='logo'>Eraf</div>

        <div className={mobile ? 'mobileLink' : 'Link'} onClick={()=>
        setMobile(false)}>
            <ul className={mobile ? 'navLink-mobile' : 'navLink'} 
            onClick={()=>setMobile(false)}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/work">Works</a></li>
                <li><a href="/cast">Casting</a></li>
            </ul>

            <div  className={mobile ? 'btn-mobile' : 'btn-d'} onClick={()=>setMobile(false)}>
      <button className='btn1'>Contact </button>
      </div>
        </div>
       
   
       <button className="menu" onClick={()=> setMobile(!mobile)}>
       {mobile ? <HiOutlineX/> : <HiOutlineMenu/>}
       </button>


    </div>
   </nav>
  )
}

export default Navbar