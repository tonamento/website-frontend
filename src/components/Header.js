import React, { useState, useRef } from 'react';
import logo from '../img/logo.png'
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    const [activeNavItem, setActiveNavItem] = useState('Home');

    const handleNavItemClick = (navItem) => {
        setActiveNavItem(navItem);
        const roadmapSection = document.querySelector(`#${navItem.toLowerCase()}-section`); 
        roadmapSection.scrollIntoView({ behavior: "smooth" });
        
        // Scroll to the roadmap section
    };

  return (
      <>
       <Navbar bg="light" expand="lg" id="main-nav">
        {/* navbar logo here */}
        <Navbar.Brand href={'#home-section'}><img src={logo} alt="logo" width={40} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
            <Nav className="mr-auto" id="nav-links">
                <Nav.Link href="">Whitepaper</Nav.Link>
                <Nav.Link href="#roadmap-section">Roadmap</Nav.Link>
                <Nav.Link href="https://docs.tonamento.app" target="_blank">Docs</Nav.Link>
                <Nav.Link href="#team-section">Team</Nav.Link>
                <Nav.Link href="#socials-section">Socials</Nav.Link>
            </Nav>
            <Nav id="launch-nav">
                <Nav.Link href="https://playground.tonamento.app" target="_blank" style={{backgroundColor: 'black',borderRadius: '10px', padding: '6px 20px', color: 'white'}}>Inter Playground</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
      <nav className="l-side-nav">
          <div id='nav-cover'></div>
           <ul className="side-nav">
              <li className={activeNavItem === 'Home' ? 'is-active' : ''} onClick={() => handleNavItemClick('Home')}><span>Home</span></li>
              <li className={activeNavItem === 'Info' ? 'is-active' : ''} onClick={() => handleNavItemClick('Info')}><span>Info</span></li>
              <li className={activeNavItem === 'Roadmap' ? 'is-active' : ''} onClick={() => handleNavItemClick('Roadmap')}><span>Roadmap</span></li>
              <li className={activeNavItem === 'Team' ? 'is-active' : ''} onClick={() => handleNavItemClick('Team')}><span>Team</span></li>
              <li className={activeNavItem === 'Socials' ? 'is-active' : ''} onClick={() => handleNavItemClick('Socials')}><span>Socials</span></li>
           </ul>
        </nav>
      </>
  )


}

export default Header;