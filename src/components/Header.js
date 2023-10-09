import React, { useState } from 'react';
import $ from 'jquery';

function Header() {
 const [activeKey, setActiveKey] = useState("home");

  function handleClick(event) {
    const clickedKey = event.currentTarget.dataset.key;
    setActiveKey(clickedKey);
   
    $(".section").removeClass("section--is-active")
    $(`#${event.currentTarget.dataset.key}-section`).addClass("section--is-active")
  }

    return (
      <>
       <header className="header">
               <a className="header--logo" href="#0">
                    <img src="assets/img/logo.png" alt="Global"/>
                    <p>Global</p>
               </a>
               <button className="header--cta cta">Hire Us</button>
               <div className="header--nav-toggle">
                    <span></span>
               </div>
        </header>
        <nav className="l-side-nav">
          <div id='nav-cover'></div>
           <ul className="side-nav">
               <li className={activeKey === "home" ? "is-active" : ""} data-key="home" onClick={handleClick}><span>Home</span></li>
               <li className={activeKey === "whats" ? "is-active" : ""} data-key="whats" onClick={handleClick}><span>Whats Tonamento?</span></li>
               <li className={activeKey === "whitepaper" ? "is-active" : ""} data-key="whitepaper" onClick={handleClick}><span>Whitepaper</span></li>
               <li className={activeKey === "roadmap" ? "is-active" : ""} data-key="roadmap" onClick={handleClick}><span>Roadmap</span></li>
               <li className={activeKey === "team" ? "is-active" : ""} data-key="team" onClick={handleClick}><span>Team</span></li>
           </ul>
        </nav>
      </>
  )


}

export default Header;