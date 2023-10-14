import logo from './logo.svg';
// import './js/main.70a66962.js'
import React, { useEffect } from 'react';
import $ from 'jquery';
import elementOne from "./img/elements.png";
import qElement from "./img/questionElement.png";
import hale from "./img/hale.png";
import Header from './components/Header';
import './css/customStyle.css';
import './css/neoAnim.css';
import './css/cursorAnim.css';
import './css/typeAnim.css';
import './css/main.css';
import './App.css';
import './css/responsive.css';

function App() {

  function moveElement() {
    var $container = $('.App');
    var $drone = $('#home-element-one');
    
    var droneCenter = {
      x: $drone.width() / 2,
      y: $drone.height() / 2
    };
    
    // The Image moving
    $container.on('mousemove', function(event) {
      var angleX = (event.offsetX - droneCenter.x) / $drone.width() * 20; // Adjust the angle to control the descent
      var angleY = (event.offsetY - droneCenter.y) / $drone.height() * 20; // Adjust the angle to control the descent
      
      $drone.css('transition', 'transform 0.15s ease');
      $drone.css('transform', `rotate3d(1, 1, 1, ${angleX}deg) translateY(${angleY}px)`);
    });
}

  function cursor() { 
    const cursor = document.querySelector(".cursor");
    var timeout;
    
    //follow cursor on mousemove
    document.addEventListener("mousemove", (e) => {
      let x = e.pageX;
      let y = e.pageY;
    
      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
      cursor.style.display = "block";
    
      //cursor effects when mouse stopped
      function mouseStopped(){
        cursor.style.display = "none";
      }
      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 1000);
    });
    
    //cursor effects when mouseout
    document.addEventListener("mouseout", () => {
      cursor.style.display = "none";
    })
  }

 function typography() {
    var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };

  window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.5em solid #fff}";
      document.body.appendChild(css);
  };
  }
  
  useEffect(() => {
    cursor();
    moveElement();
    typography();
  }, [])
 
  return (
    <div className="App">
      <div className="cursor"></div>
      <div className="perspective effect-rotate-left">
        <div className="container"><div className="outer-nav--return"></div>
           <div id="viewport" className="l-viewport">
            <div className="l-wrapper">
              <Header />
              <ul className="l-main-content main-content">
                <li className="l-section section section--is-active" id='home-section'>
                    <div className="intro">
                      <div className="intro--banner">
                        <span> <h1>Tonamento</h1> </span>
                        <div class="typewrite" data-period="2000" data-type='[ "The first decentralized game brokerage", "Second generation of Game-Fi" ]'>
                        </div>
                        <button className="cta">Games
                          <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 150 118">
                          <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                            <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
                          </g>
                          </svg>
                          <span className="btn-background"></span>
                        </button>
                        <img id="home-element-one" src={elementOne} alt="Welcome" style={{width:"420px"}}/>
                        <img id="home-element-two" src={hale} alt="Welcome" style={{width:"700px"}}/>
                      </div>
                      <div className="intro--options">
                        <a href="#0" className='home-banner' id='weekly-banner'>
                          <h3>Weekly Tour</h3>
                        </a>
                        <a href="#0" className='home-banner' id='tona-banner'>
                          <h3>TonaChat</h3>
                        </a>
                        <a href="#0" className='home-banner' id='lottery-banner'>
                          <h3>Lottery</h3>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="l-section section" id='whats-section'>
                    <div className="intro">
                      <div className="intro--banner" id='what-banner'>
                        <h5 className='text-h1'>Whats<br/>Tonamento?</h5>
                         <div className='dark-blur'>
                             <p>Tonamento: The First Decentralized Game Brokerage Worldwide for Stable Income</p>
                             <p>In Tonamento, you can enjoy exciting mini-games while having fun and making money, meeting new friends, and sharing your skills and experiences with them. </p>
                             <p>Throughout the week, you can increase your rank on the leaderboard by collecting points. This will grant you permission to participate in weekly competitions, where you have the chance to win unique weekly prizes. </p>
                             <p>As you gain experience, enhance your skills, achieve special milestones, and convert your efforts into NFTs. You can either sell them in the market or keep them to enhance your profile and utilize their unique features in games. </p>
                             <p>Tonamento guarantees a stable income because the game's economic system is designed to withstand market fluctuations without affecting your earnings.</p>
                         </div>
                        <img id="whats-element-one" src={qElement} alt="Welcome" style={{width:"550px"}}/>
                      </div>
                    </div>
                  </li>
                  <li className="l-section section" id='whitepaper-section'>
                    <div className="work">
                      <h2>Selected work</h2>
                      <div className="work--lockup">
                        <ul className="slider">
                          <li className="slider--item slider--item-left">
                            <a href="#0">
                              <div className="slider--item-image">
                                <img src="assets/img/work-victory.jpg" alt="Victory"/>
                              </div>
                              <p className="slider--item-title">Victory</p>
                              <p className="slider--item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                            </a>
                          </li>
                          <li className="slider--item slider--item-center">
                            <a href="#0">
                              <div className="slider--item-image">
                                <img src="assets/img/work-metiew-smith.jpg" alt="Metiew and Smith"/>
                              </div>
                              <p className="slider--item-title">Metiew &amp; Smith</p>
                              <p className="slider--item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                            </a>
                          </li>
                          <li className="slider--item slider--item-right">
                            <a href="#0">
                              <div className="slider--item-image">
                                <img src="assets/img/work-alex-nowak.jpg" alt="Alex Nowak" />
                              </div>
                              <p className="slider--item-title">Alex Nowak</p>
                              <p className="slider--item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                            </a>
                          </li>
                        </ul>
                        <div className="slider--prev">
                          <svg version="1.1" id="Layer_1" x="0px" y="0px"
                          viewBox="0 0 150 118">
                          <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                            <path d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
                            c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
                            c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z"/>
                          </g>
                          </svg>
                        </div>
                        <div className="slider--next">
                          <svg version="1.1" id="Layer_1"  x="0px" y="0px" viewBox="0 0 150 118">
                          <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                            <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
                          </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="l-section section" id='roadmap-section'>
                    <div className="about">
                      <div className="about--banner">
                        <h2>We<br/>believe in<br/>passionate<br/>people</h2>
                        <a href="#0">Career
                          <span>
                            <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 150 118">
                            <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                              <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
                            </g>
                            </svg>
                          </span>
                        </a>
                        <img src="assets/img/about-visual.png" alt="About Us"/>
                      </div>
                      <div className="about--options">
                        <a href="#0">
                          <h3>Winners</h3>
                        </a>
                        <a href="#0">
                          <h3>Philosophy</h3>
                        </a>
                        <a href="#0">
                          <h3>History</h3>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="l-section section" id='team-section'>
                    <div className="contact">
                      <div className="contact--lockup">
                        <div className="modal">
                          <div className="modal--information">
                            <p>Pawia 5, 31-154 Kraków, Poland</p>
                            <a href="mailto:ouremail@gmail.com">ouremail@gmail.com</a>
                            <a href="tel:+148126287560">+48 12 628 75 60</a>
                          </div>
                          <ul className="modal--options">
                            <li><a href="#0">Bēhance</a></li>
                            <li><a href="#0">dribbble</a></li>
                            <li><a href="mailto:ouremail@gmail.com">Contact Us</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="l-section section" id='open-app'>
                    <div className="hire">
                      <h2>You want us to do</h2>
                      <form className="work-request">
                        <div className="work-request--options">
                          <span className="options-a">
                            <input id="opt-1" type="checkbox" value="app design" />
                            <label htmlFor="opt-1">
                              <svg version="1.1" id="Layer_1" x="0px" y="0px"
                              viewBox="0 0 150 111">
                              <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                                <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
                              </g>
                              </svg>
                              App Design
                            </label>
                            <input id="opt-2" type="checkbox" value="graphic design" />
                            <label htmlFor="opt-2">
                              <svg version="1.1" id="Layer_1" x="0px" y="0px"
                              viewBox="0 0 150 111">
                              <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                                <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
                              </g>
                              </svg>
                              Graphic Design
                            </label>
                            <input id="opt-3" type="checkbox" value="motion design" />
                            <label htmlFor="opt-3">
                              <svg version="1.1" id="Layer_1" x="0px" y="0px"
                              viewBox="0 0 150 111">
                              <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                                <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
                              </g>
                              </svg>
                              Motion Design
                            </label>
                          </span>
                          <span className="options-b">
                            <input id="opt-4" type="checkbox" value="ux design" />
                            <label htmlFor="opt-4">
                              <svg version="1.1" id="Layer_1" x="0px" y="0px"
                              viewBox="0 0 150 111">
                              <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                                <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
                              </g>
                              </svg>
                              UX Design
                            </label>
                            <input id="opt-5" type="checkbox" value="webdesign" />
                            <label htmlFor="opt-5">
                              <svg version="1.1" id="Layer_1" x="0px" y="0px"
                              viewBox="0 0 150 111" >
                              <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                                <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
                              </g>
                              </svg>
                              Webdesign
                            </label>
                            <input id="opt-6" type="checkbox" value="marketing" />
                            <label htmlFor="opt-6">
                              <svg version="1.1" id="Layer_1"x="0px" y="0px"
                              viewBox="0 0 150 111">
                              <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                                <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
                              </g>
                              </svg>
                              Marketing
                            </label>
                          </span>
                        </div>
                        <div className="work-request--information">
                          <div className="information-name">
                            <input id="name" type="text" spellCheck="false" />
                            <label htmlFor="name">Name</label>
                          </div>
                          <div className="information-email">
                            <input id="email" type="email" spellCheck="false" />
                            <label htmlFor="email">Email</label>
                          </div>
                        </div>
                        <input type="submit" value="Send Request" />
                      </form>
                    </div>
                  </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
