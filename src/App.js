import HomePage from "./pages/homePage";
import AboutUs from "./pages/aboutUs";
import EducationPage from "./pages/education";
// import Navigation from "./components/navigation";
import Donate from "./pages/donate";
import ContactUs from "./pages/contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import React, { useEffect, useRef } from "react";

export default function App() {
  return (
    <div className="">
      <div id="root">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="HomePage" element={<HomePage />} />
            <Route path="AboutUS" element={<AboutUs />} />
            <Route path="EducationPage" element={<EducationPage />} />
            <Route path="Donate" element={<Donate />} />
            <Route path="ContactUS" element={<ContactUs />} />
            {/* <Route path="ContactUs" element={<ContactUs />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

function Header() {
  // const heighty =document.querySelector('.misweTogether');
  // const stickyNavigation = document.querySelector('.header');
  // const targetHeight = heighty.getBoundingClientRect().height;

  // const stickyMenu = function (entries) {
  //   const [entry] = entries;

  //   if(!entry.isIntersecting) {
  //     heighty.classList.add('sticky-active')
  //   } else {
  //     heighty.classList.remove('sticky-active')
  //   }
  // };

  // const headerObserver = New IntersectionObserver(stickyMenu, {
  //   root: null,
  //   threshold: 0,
  //   rootMargin: `-${targetHeight}px`,
  // });

  // headerObserver.observer(stickyNavigation);

  return (
    <div className="div-wrapper">
      <div className="header">
        <div className="logo-div">
          <img src="/image/logo-image.png" className="brand-logo" alt="logo" />
        </div>

        <div className="link-address-div">
          <div className="main-nav">
            <div className="main-nav-location">
              <img
                src="/image/phone-call.png"
                className="nav-logo"
                alt="phone"
              />
              <nav className="location-city">
                <p className="fant-word">Helpline</p>
                <p className="number-info-city">+255 787 177 992</p>
              </nav>
            </div>

            <div className="main-nav-location">
              <img
                src="/image/entypo_email.png"
                className="nav-logo"
                alt="phone"
              />
              <nav className="location-city">
                <p className="fant-word">Send Email</p>
                <p className="number-info-city">info@cidi.co.tz</p>
              </nav>
            </div>

            <div className="main-nav-location">
              <img src="/image/location.png" className="nav-logo" alt="phone" />
              <nav className="location-city">
                <p className="fant-word">Mikocheni</p>
                <p className="number-info-city">Dar es Salaam, Tanzania</p>
              </nav>
            </div>

            <div className="logo-two">
              <img
                src="/image/icon-park.png"
                className="logo-two-img"
                alt="park logo"
              />
              <a href="home" className="volunteer">
                Become a volunteer
              </a>
            </div>
          </div>

          <div className="link-nav">
            <div className="link-div">
              {/* <a href="home" className="link-style home">
                Home
              </a> */}
              {/* <a href="/aboutUs" className="link-style">
                About
              </a> */}
              <Link to="/homePage" className="link-style home">
                Home
              </Link>
              <Link to="/aboutUs" className="link-style">
                About
              </Link>

              <div className="_hover-main">
                <Link to="/education" className="link-style">
                  Projects
                </Link>

                <nav className="hoverLinks">
                  <Link to="/education" className="link-style hoverColorLink">
                    Education
                  </Link>

                  <Link to="/education" className="link-style hoverColorLink">
                    Agriculter
                  </Link>

                  <Link to="/education" className="link-style hoverColorLink">
                    Water Sanitation
                  </Link>
                </nav>
              </div>

              <Link to="/donate" className="link-style">
                Donate
              </Link>
              <a href="home" className="link-style">
                News and Events
              </a>

              <Link to="/contact" className="link-style">
                Contact Us
              </Link>
            </div>
            <nav>
              <Link to="/donate" className="link-style green-link">
                Donate
              </Link>
            </nav>
          </div>
        </div>
        <div className="menu-open">🟰</div>
      </div>
    </div>
  );
}
