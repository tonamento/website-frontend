import React from 'react';


function Header() {
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
           <ul className="side-nav">
               <li key="home" className="is-active"><span>Home</span></li>
               <li key="whats"><span>whats Tonamento?</span></li>
               <li key="whitepaper"><span>Whitepaper</span></li>
               <li key="roadmap"><span>Roadmap</span></li>
               <li key="team"><span>Team</span></li>
           </ul>
        </nav>
      </>
  )


}

export default Header;