import React, { useState, useRef } from 'react';
import logo from '../img/logo.png'
import { Navbar, Nav } from 'react-bootstrap';
import $ from 'jquery';

function Header() {
    const [activeNavItem, setActiveNavItem] = useState('Home');

    const handleNavItemClick = (navItem) => {
        setActiveNavItem(navItem);
        const roadmapSection = document.querySelector(`#${navItem.toLowerCase()}-section`); 
        roadmapSection.scrollIntoView({ behavior: "smooth" });

        // delete activeNavItem;
        $('.side-li').removeClass('is-active');
        $(`#${navItem}`).addClass('is-active');
        $(`.side-li#${navItem}::before`).css('content', '');
    };

  return (
      <>
       <Navbar bg="light" expand="lg" id="main-nav">
        {/* navbar logo here */}
        <Navbar.Brand href={'#home-section'}><img src={logo} alt="logo" width={40} style={{marginLeft: '10px'}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
            <Nav className="mr-auto" id="nav-links">
                <Nav.Link href="">Whitepaper</Nav.Link>
                <Nav.Link href="#roadmap-section">Roadmap</Nav.Link>
                <Nav.Link href="https://docs.tonamento.app" target="_blank">Docs</Nav.Link>
                <Nav.Link href="/litepaper.pdf" target="_blank">Litepaper</Nav.Link>
                <Nav.Link href="#team-section">Team</Nav.Link>
                <Nav.Link href="#socials-section">Socials</Nav.Link>
            </Nav>
            <Nav id="launch-nav">
                <Nav.Link href="https://playground.tonamento.app" target="_blank" style={{backgroundColor: '#2937F0',borderRadius: '10px', padding: '6px 20px', color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Inter Playground</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
      <nav className="l-side-nav">
          <div id='nav-cover'></div>
           <ul className="side-nav">
              <li className='side-li is-active' id='Home' onClick={() => handleNavItemClick('Home')}><span>Home</span></li>
              <li className='side-li' id='Info' onClick={() => handleNavItemClick('Info')}><span>Info</span></li>
              <li className='side-li' id='Roadmap' onClick={() => handleNavItemClick('Roadmap')}><span>Roadmap</span></li>
              <li className='side-li' id='Team' onClick={() => handleNavItemClick('Team')}><span>Team</span></li>
              <li className='side-li' id='Socials' onClick={() => handleNavItemClick('Socials')}><span>Socials</span></li>
           </ul>
        </nav>
      </>
  )


}

export default Header;