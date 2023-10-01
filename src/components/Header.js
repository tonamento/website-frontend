

function Header() {
    return (
      <>
       <header class="header">
               <a class="header--logo" href="#0">
                    <img src="assets/img/logo.png" alt="Global"/>
                    <p>Global</p>
               </a>
               <button class="header--cta cta">Hire Us</button>
               <div class="header--nav-toggle">
                    <span></span>
               </div>
        </header>
        <nav class="l-side-nav">
           <ul class="side-nav">
           <li class="is-active"><span>Home</span></li>
           <li><span>Works</span></li>
           <li><span>About</span></li>
           <li><span>Contact</span></li>
           <li><span>Hire us</span></li>
           </ul>
        </nav>
      </>
  )


}

export default Header;