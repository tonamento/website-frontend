import logo from './img/logo.png';
// import './js/main.70a66962.js'
import React, { useEffect } from 'react';
import $ from 'jquery';
import elementOne from "./img/elements.png";
import qElement from "./img/questionElement.png";
import hale from "./img/hale.png";
import Header from './components/Header';
import './css/cursorAnim.css';
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
      var angleX = (event.offsetX - droneCenter.x) / $drone.width() * 20; // Adjust the angle to control the descent
      var angleY = (event.offsetY - droneCenter.y) / $drone.height() * 20; // Adjust the angle to control the descent
      
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
  
  useEffect(() => {
    cursor();
    moveElement();
    typography();
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
                            <div class="typewrite" data-period="2000" data-type='[ "The first decentralized game brokerage", "Second generation of Game-Fi"]'></div>
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
                    <div className="col-lg-4 order-lg-0">
                        <div className="features-device-mockup">
                           <img className="event-element" id="whats-element-one" src={qElement} alt="Welcome" style={{width:"350px"}}/>
                             <h1 className="display-1 lh-1 mb-3">What's Tonamento?</h1>                                      
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
                </div>
            </div>
      </section>
     <section className="bg-blue">
            <div className="container px-5">
                <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                    <div className="col-12 col-lg-5">
                        <h2 className="display-4 lh-1 mb-4">Enter a new age of web design</h2>
                        <p className="lead fw-normal text-muted mb-5 mb-lg-0">This section is perfect for featuring some information about your application, why it was built, the problem it solves, or anything else! There's plenty of space for text here, so don't worry about writing too much.</p>
                    </div>
                    <div className="col-sm-8 col-md-6">
                        <div className="px-5 px-sm-0"><img className="img-fluid rounded-circle" src="https://source.unsplash.com/u8Jn2rzYIps/900x900" alt="..." /></div>
                    </div>
                </div>
            </div>
       </section>
      <section className="cta">
            <div className="cta-content">
                <div className="container px-5">
                    <h2 className="text-white display-1 lh-1 mb-4">
                        Stop waiting.
                        <br />
                        Start building.
                    </h2>
                    <a className="btn btn-outline-light py-3 px-4 rounded-pill" href="https://startbootstrap.com/theme/new-age" target="_blank">Download for free</a>
                </div>
            </div>
        </section>
      <section className="bg-gradient-primary-to-secondary" id="download">
            <div className="container px-5">
                <h2 className="text-center text-white font-alt mb-4">Get the app now!</h2>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                    <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" src="assets/img/google-play-badge.svg" alt="..." /></a>
                    <a href="#!"><img className="app-badge" src="assets/img/app-store-badge.svg" alt="..." /></a>
                </div>
            </div>
        </section>
        <footer className="bg-black text-center py-5">
            <div className="container px-5">
                <div className="text-white-50 small">
                    <div className="mb-2">&copy; Your Website 2023. All Rights Reserved.</div>
                    <a href="#!">Privacy</a>
                    <span className="mx-1">&middot;</span>
                    <a href="#!">Terms</a>
                    <span className="mx-1">&middot;</span>
                    <a href="#!">FAQ</a>
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
