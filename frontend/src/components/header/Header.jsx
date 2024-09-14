import React, { useState } from 'react'
import './header.css';
const Header = () => {
    const menuItems = [
        { name: "Home", href: "#home", icon: "uil uil-estate" },
        { name: "About", href: "#about", icon: "uil uil-user" },
        { name: "Skills", href: "#skills", icon: "uil uil-user" },
        { name: "Portfolio", href: "#portfolio", icon: "uil uil-file-alt" },
        { name: "Contact", href: "#contact", icon: "uil uil-message" },
      ];
    // toggle menu
    const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='header'>
        <nav className="container nav">
            <a href="index.html" className='text-text-title font-medium md:hidden'>Phoebe Hu</a>
            <div className={`nav_menu ${showMenu?'show_menu':''}`}>
                <ul className='nav_list flex gap-6'>
                    {menuItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}
                            className='nav_link'
                        >
                            <i 
                            className={`
                                ${item.icon} nav_icon mr-2
                            `}/>
                            {item.name}
                        </a>
                    </li>
                    ))}
                </ul>
                <div  className='nav_close hidden' onClick={()=>setShowMenu(false)}>
                    <i className='uil uil-times'></i>
                </div>
            </div>
            <div  className='nav_toggle hidden' onClick={()=>setShowMenu(true)}>
                    <i className='uil uil-apps font-medium'></i>
            </div>        
            
            
        </nav>
    </header>
  )
}

export default Header