import logo from './img/logo.png';
// import './js/main.70a66962.js'
import React, { useEffect } from 'react';
import $ from 'jquery';
import elementOne from "./img/elements.png";
import qElement from "./img/questionElement.png";
import owl_profile from "./img/owl-profile.jpg";
import dragon_profile from "./img/dragon-profile.jpg";
import crocodile_profile from "./img/crocodile-profile.jpg";
import cat_profile from "./img/cat-profile.jpg";
import hale from "./img/hale.png";
import Header from './components/Header';
import './css/cursorAnim.css';
import './css/timeline.css';
import './App.css';
import './css/main.css';
import './css/customStyle.css';
import './css/responsive.css';

function App() {

  function moveElement() {
    var $container = $('.App');
    var $drone = $('.event-element');
    
    var droneCenter = {
      x: $drone.width() / 2,
      y: $drone.height() / 2
    };
    
    // The Image moving
    $container.on('mousemove', function(event) {
      var angleX = (event.offsetX - droneCenter.x) / $drone.width() * 15; // Adjust the angle to control the descent
      var angleY = (event.offsetY - droneCenter.y) / $drone.height() * 15; // Adjust the angle to control the descent
      
      $drone.css('transition', 'transform 0.15s ease');
      $drone.css('transform', `rotate3d(1, 1, 1, ${angleX}deg) translateY(${angleY}px)`);
    });
}

function cursor() {
    (function () {

        const link = document.querySelectorAll('nav > .hover-this');
        const cursor = document.querySelector('.cursor');
  
        const animateit = function (e) {
              const span = this.querySelector('span');
              const { offsetX: x, offsetY: y } = e,
              { offsetWidth: width, offsetHeight: height } = this,
  
              move = 25,
              xMove = x / width * (move * 2) - move,
              yMove = y / height * (move * 2) - move;
  
              span.style.transform = `translate(${xMove}px, ${yMove}px)`;
  
              if (e.type === 'mouseleave') span.style.transform = '';
        };
  
        const editCursor = e => {
              const { clientX: x, clientY: y } = e;
              cursor.style.left = x + 'px';
              cursor.style.top = y + 'px';
        };
  
        link.forEach(b => b.addEventListener('mousemove', animateit));
        link.forEach(b => b.addEventListener('mouseleave', animateit));
        window.addEventListener('mousemove', editCursor);
  
  })();
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

      this.el.innerHTML = '<span className="wrap">'+this.txt+'</span>';

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

  function timeline() {
    var items = document.querySelectorAll("li");

    function isItemInView(item){
  var rect = item.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
        if (isItemInView(items[i])) {
            items[i].classList.add("show");
        }
        }
    }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
}
  
  useEffect(() => {
    cursor();
    moveElement();
    typography();
    timeline()
  }, [])
  
 
  return (
  <div className="App"> 
     <div className="cursor"></div>
      <div className="perspective effect-rotate-left">
     <Header />
     <header className="masthead">
            <div className="container px-5 mb-5">
                <div className="row gx-5 align-items-center d-inline">
                    <div className="col-lg-6 mb-5">
                        <div className="mb-5 mb-lg-0 text-center text-lg-start">
                            <h1 className="display-1 lh-1 mb-3">Tonamento</h1>
                            <div className="typewrite" data-period="2000" data-type='[ "The first decentralized game brokerage", "Second generation of Game-Fi"]'></div>
                        </div>
                    </div>
                    <div className="col-lg-6 intro--options mt-5">
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
                    <div className="col-lg-6">
                        <img className='event-element' id="home-element-one" src={elementOne} alt="Welcome" style={{width:"460px"}}/>
                        <img id="home-element-two" src={hale} alt="Welcome" style={{width:"520px"}}/>
                    </div>
                </div>
            </div>
      </header>
     <section id="features" className='mt-lg-5'>
            <div className="container px-5 mt-lg-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-4 order-lg-0">
                        <div className="features-device-mockup">
                           <img className="event-element" id="whats-element-one" src={qElement} alt="Welcome" style={{width:"350px"}}/>
                             <h1 className="display-1 lh-1 mb-3" id='whats-title'>What's Tonamento?</h1>                                      
                            <svg className="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                 <circle cx="50" cy="50" r="50"></circle></svg>
                                 <svg className="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                                <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)"></rect>
                                 <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)"></rect></svg>
                                 <svg className="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="50"></circle>
                            </svg>
                        </div>
                     </div>
                    <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                        <div className="container-fluid px-5">
                            <div className="row gx-5">
                                <div className="col-md-6 mb-5 whats-text-parent-div">
                                    <div className="text-center ml-5">
                                        <i className="bi-phone icon-feature text-gradient d-block mb-3"></i>
                                       <p className="mb-0" id='whats-text'>Tonamento: The First Decentralized Game Brokerage in the world!<br/>
In Tonamento, you can enjoy exciting mini-games while having fun and making money, meeting new friends, and sharing your skills and experiences with them.<br/>
Throughout the week, you can increase your rank on the leaderboard by collecting points.<br/> This will grant you permission to participate in weekly competitions, where you have the chance to win unique weekly prizes.<br/>
As you gain experience, enhance your skills, achieve special milestones, and convert your efforts into NFTs.<br/> You can either sell them in the market or keep them to enhance your profile and utilize their unique features in games.<br/>
Tonamento guarantees a stable income because the game's economic system is designed to withstand market fluctuations without affecting your earnings.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
     <section className="bg-blue" id='roadmap-section'>
        <div>
           <h1 className='display-1 lh-1 mb-3' id='roadmap-title'>Roadmap Section</h1>
           <ul id='parent-ul'>
              <li className='parent-li'>
                <div>
                  <time>Q4 - 2023</time>
                  <ul>
                    <li>Making MVP</li>
                    <li>Start social networks </li>
                    <li>Launching smart contract on base goerli network</li>
                    <li>Making profile for every user</li>
                  </ul>
                </div>
              </li>
              <li className='parent-li'>
                <div>
                  <time>Q1 - 2024</time>
                  <ul>
                    <li>Assembling a team</li>
                    <li>Developing of platform and make the Playground with 12 games</li>
                    <li>Launching tonachat</li>
                  </ul>
                </div>
              </li>
              <li className='parent-li'>
                <div>
                  <time>Q2 - 2024</time>
                  <ul>
                    <li>Launching mobile apps (IOS, Android)</li>
                    <li>Launching smart contract on Scroll network</li>
                    <li>make team bigger </li>
                    <li>Launch weekly tour</li>
                    <li>Make NFT minting landing page</li>
                    <li>Launching ingames NFT parts </li>
                    <li>Launching smart contract on Ethereum network </li>
                    <li>Launching lottery section </li>
                    <li>Cyber security Tests</li>
                    <li>Advertising campaigns </li>
                  </ul>
                </div>
              </li>
              <li className='parent-li'>
                <div>
                  <time>Q3 - 2024</time>
                  <ul>
                  <li>Mainnet launch</li>
                  <li>Developing the smart contract to all EVM layer2 networks</li>
                  <li>Make NFT collection</li>
                  </ul>
                </div>
              </li>
              <li className='parent-li'>
                <div>
                  <time>Q4 - 2024</time>
                  <ul>
                    <li>Launching NFT collection </li>
                    <li>Launching governance token</li>
                  </ul>
                </div>
              </li>
            </ul>
        </div>
      </section>
     <section className="bg-blue" id='team-section'>
        <div>
           <h1 className='display-1 lh-1 mb-3' id='roadmap-title'>CoreTeam</h1>
           <div class="team-section">
            <div class="container mt-5">
              <div class="row mt-5">
                <div class="col-md-3 mt-5 team-box">
                  <div class="team-member">
                    <img src={owl_profile} class="img-fluid" alt="Member 1"></img>
                    <h3>Old Owl</h3>
                    <p>CEO & Founder</p>
                  </div>
                </div>

                <div class="col-md-3 mt-5 team-box">
                  <div class="team-member">
                    <img src={cat_profile} class="img-fluid" alt="Member 2"></img>
                    <h3>Hr</h3>
                    <p>Contact Support</p>
                  </div>
                </div>

                <div class="col-md-3 mt-5 team-box">
                  <div class="team-member">
                    <img src={crocodile_profile} class="img-fluid" alt="Member 2"></img>
                    <h3>E H</h3>
                    <p>Community Manager</p>
                  </div>
                </div>

                <div class="col-md-3 mt-5 team-box">
                  <div class="team-member">
                    <img src={dragon_profile} class="img-fluid" alt="Member 3"></img>
                    <h3>Eh sh</h3>
                    <p>Dragon</p>
                  </div>
                </div>

                <div class="col-md-3 mt-5 team-box">
                  <div class="team-member">
                    <img src={owl_profile} class="img-fluid" alt="Member 4"></img>
                    <h3>M owl</h3>
                    <p>Social Manager</p>
                  </div>
                </div>

                <div class="col-md-3 mt-5 team-box">
                  <div class="team-member">
                    <img src={owl_profile} class="img-fluid" alt="Member 4"></img>
                    <h3>Sarah Lee</h3>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     <section className="bg-gradient-primary-to-secondary" id="download">
            <div className="container px-5 text-center">
            <h1 className="display-1 lh-1 mb-3">Join our community!</h1>
            <div className='d-flex px-1 mt-5 justify-content-center' style={{filter:'invert(1)'}}>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                    <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
                       <img width="80" height="80" src="https://img.icons8.com/ios-filled/100/twitterx--v2.png" alt="twitterx--v2"/>
                    </a>
                </div>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                    <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
                      <img width="80" height="80" src="https://img.icons8.com/ios-filled/100/telegram-app.png" alt="telegram-app"/>
                    </a>
                </div>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                    <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
                       <img width="80" height="80" src="https://img.icons8.com/ios-filled/100/discord-logo.png" alt="discord-logo"/>
                    </a>
                </div>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                    <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
                       <img width="80" height="80" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo.png" alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo"/>
                    </a>
                </div>
            </div>
          </div>
      </section>
    <footer className="bg-black text-center py-5">
            <div className="container px-5">
                <div className="text-white-50 small">
                    <div className="mb-2">&copy; Tonamento Website 2023. All Rights Reserved.</div>
                    <a href="#!">terms of use</a>
                    <span className="mx-1">&middot;</span>
                    <a href="#!">privacy policy </a>
                </div>
            </div>
      </footer>
     <div className="modal fade" id="feedbackModal" tabindex="-1" aria-labelledby="feedbackModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-gradient-primary-to-secondary p-4">
                        <h5 className="modal-title font-alt text-white" id="feedbackModalLabel">Send feedback</h5>
                        <button className="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body border-0 p-4">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Phone number</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} data-sb-validations="required"></textarea>
                                <label for="message">Message</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            <div className="d-grid"><button className="btn btn-primary rounded-pill btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
       </div>
    </div>
  </div>
  );
}

export default App;
