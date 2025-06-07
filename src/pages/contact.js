import React from "react";

function ContactUs() {
  return (
    <div className="">
      <ContactUsAddress />
      <LocatedArea />
      <ContactUsCidiSubscribe />
      <ContactCidiSubscribe />
      <ContactUsFooter />
    </div>
  );
}

function ContactUsAddress() {
  return (
    <div className="div-wrapper">
      <div className="contactUs-div">
        <h2 className="education-header">Contact Us</h2>
        <span className="down-arrow">
          <img
            src="/image/downArrow.png"
            className="downarrow"
            alt="down arrow"
          />
        </span>

        <div className="openningAddressGet">
          <div className="openningHours">
            <img
              src="/image/clock.png"
              className="addressIcon"
              alt="icon that used to show placess"
            />
            <p className="headingAddress">Opening Hours</p>
            <p className="addressWord">Mon - Fri: 9 AM - 6 PM</p>
            <p className="addressWord">Saturday: 9 AM - 4 PM</p>
            <p className="addressWord">Sunday: Closed</p>
          </div>

          <div className="openningHours">
            <img
              src="/image/replace.png"
              className="addressIcon"
              alt="icon that used to show placess"
            />
            <p className="headingAddress">Address</p>
            <p className="addressWord">Plot No. 421, Mikocheni B</p>
            <p className="addressWord">P.O Box 8028,</p>
            <p className="addressWord"> Dar es Salaam, Tanzania</p>
          </div>

          <div className="openningHours">
            <img
              src="/image/headphones.png"
              className="addressIcon"
              alt="icon that used to show placess"
            />
            <p className="headingAddress">Get In Touch</p>
            <p className="addressWord">Telephone: +255 784 209155;</p>
            <p className="addressWord">+255 784 209890</p>
            <p className="addressWord">Email: info@cidi.co.tz</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocatedArea() {
  return (
    <div className="div-wrapper">
      <div className="locatedArea">
        <img
          src="/image/locatedimg.png"
          className="locatedImg"
          alt="Img that show located area"
        />

        <div className="contactUs-located">
          <h3 className="headingContact-us">Contact Us</h3>
          <p className="contact-paragraph">Have Questions?</p>
          <p className="contact-paragraph">Get in Touch</p>

          <form className="messageForm">
            <div className="names-div names-div-margin">
              <input
                type="text"
                className="nameAddress-input"
                placeholder="First Name"
              />
              <input
                type="text"
                className="nameAddress-input"
                placeholder="Last Name"
              />
            </div>

            <div className="names-div">
              <input
                type="text"
                className="nameAddress-input"
                placeholder="Email Address"
              />
              <input
                type="text"
                className="nameAddress-input"
                placeholder="Phone Number"
              />
            </div>

            <input
              type="text"
              className="nameAddress-input-message"
              placeholder="Message"
            />

            <button className="sendMessageButton">➤ Send a Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactUsCidiSubscribe() {
  return (
     <div className="div-wrapper">
      <div className="donate-button">
        <p className="donate-paragraph">Help us educate a Child</p>
        <button className="help-button">Donate</button>
      </div>
    </div>
  );
}

function ContactCidiSubscribe() {
  return (
    <div className="div-wrapper">
      <div className="cidi-subscribe">
        <div className="cidi-word">
          <img
            src="/image/logo-image.png"
            className="brand-logo-news"
            alt="brand  logo"
          />

          <p className="help-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
            nulla
          </p>

          <p className="help-paragraph">
            enim nec massa morbi ut diam. Porta morbi ac vitae integer vel
            aliquet
          </p>
          <p className="help-paragraph">
            ipsum, facilisis varius. At suspendisse purus proin nunc. Morbi
            vulputate
          </p>
          <p className="help-paragraph">
            suscipit orci et, feugiat vivamus pulvinar ut. Pulvinar quam
            faucibus vitae
          </p>
          <p className="help-paragraph">
            massa, ipsum, varius. Odio faucibus cursus nascetur dolor posuere.
          </p>
          <p className="help-paragraph">
            Accumsan, cursus est in massa nam. Ut pretium a sit nulla blandit in
          </p>
          <p className="help-paragraph">
            feugiat. Felis nec pellentesque ut aliquam facilisis libero.
          </p>
        </div>

        <div className="cidi-word">
          <h4 className="subscribe-news">Subscribe to our Newsletter</h4>

          <form className="email-submit">
            <input type="text" placeholder="Email" className="email-input" />

            <button className="subscribe-button">Subscribe</button>
          </form>

          <nav className="connect-withUs">
            <h3 className="subscribe-news">Connect with us!</h3>

            <nav className="social-icon">
              <a href="social" className="socialIcon">
                <img
                  src="/image/facebook.png"
                  alt="facebook"
                  className="social-name-icon"
                />
              </a>

              <a href="social" className="socialIcon">
                <img
                  src="/image/linkedin.png"
                  alt="facebook"
                  className="social-name-linkedin"
                />
              </a>

              <a href="social" className="socialIcon">
                <img
                  src="/image/facebook.png"
                  alt="facebook"
                  className="social-name-icon"
                />
              </a>

              <a href="social" className="socialIcon">
                <img
                  src="/image/linkedin.png"
                  alt="facebook"
                  className="social-name-linkedin"
                />
              </a>
            </nav>
          </nav>
        </div>
      </div>
    </div>
  );
}

function ContactUsFooter() {
  return (
    <div className="div-wrapper">
      <div className="footer">
        <p className="footer-paragraph">
          © Copyright 2022 CIDI. All Right's Reserved. Experienced by HELLENSoft
        </p>

        <nav className="footer-link">
          <a href="socialmedial" className="social-media-anchor">
            Career
          </a>
          <a href="socialmedial" className="social-media-anchor">
            Volunteer
          </a>
          <a href="socialmedial" className="social-media-anchor">
            Team
          </a>
          <a href="socialmedial" className="social-media-anchor">
            Donation
          </a>
          <a href="socialmedial" className="social-media-anchor">
            About
          </a>
          <a href="socialmedial" className="social-media-anchor">
            Project
          </a>
          <a href="socialmedial" className="social-media-anchor">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}


export default ContactUs;
