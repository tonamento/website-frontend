import React, { useState } from 'react';
import logo from '../img/logo.png'
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
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
            <img id="tona-logo" src={logo} width={50}/>
            <div className="container px-5">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#features">Whitepaper</a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#download">Roadmap</a></li>
                    </ul>
                    <button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                        <span className="d-flex align-items-center">
                            <i className="bi-chat-text-fill me-2"></i>
                            <span className="small">Open Console</span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
         <nav className="l-side-nav">
          <div id='nav-cover'></div>
           <ul className="side-nav">
               <li className={activeKey === "home" ? "is-active" : ""} data-key="home" onClick={handleClick}><span>Home</span></li>
               <li className={activeKey === "whats" ? "is-active" : ""} data-key="whats" onClick={handleClick}><span>Info</span></li>
               <li className={activeKey === "whitepaper" ? "is-active" : ""} data-key="whitepaper" onClick={handleClick}><span>Whitepaper</span></li>
               <li className={activeKey === "roadmap" ? "is-active" : ""} data-key="roadmap" onClick={handleClick}><span>Roadmap</span></li>
               <li className={activeKey === "team" ? "is-active" : ""} data-key="team" onClick={handleClick}><span>Team</span></li>
           </ul>
        </nav>
      </>
  )


}

export default Header;