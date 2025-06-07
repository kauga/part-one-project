import React from "react";

function Donate() {
  return (
    <div className="">
      <DonateForm />
      <DonationDonateButton />
      <DonationCidiSubscribe />
      <DonationFooter />
    </div>
  );
}

function DonateForm() {
  return (
    <div className="div-wrapper">
      <div className="donation-form-div">
        <h1 className="donation-form-heading">Donation Form</h1>

        <span className="down-arrow">
          <img
            src="/image/downArrow.png"
            className="downarrow"
            alt="down arrow"
          />
        </span>

        <form className="donation-form">
          <lable>Donor Name</lable>

          <div className="donor-names">
            <input
              type="text"
              placeholder="First Name"
              id="1"
              className="input-names"
            />

            <input
              type="text"
              placeholder="Last Name"
              id="1"
              className="input-names"
            />
          </div>

          <div className="donation-type">
            <lable className="lable-names">Type of Donation</lable>
            <select className="salect-option">
              <option className="option-value">Cash</option>
              <option className="option-value">float</option>
            </select>
          </div>

          <div className="donation-type margin-control">
            <lable className="lable-names">Amount</lable>
            <input
              type="text"
              placeholder="$100.00"
              id="1"
              className="input-names width-input-control"
            />
          </div>

          <div className="donation-type margin-control">
            <lable className="lable-names">Donor Notes</lable>
            <input
              type="text"
              placeholder="Message"
              id="1"
              className="input-names dona-note"
            />
          </div>

          <div className="donation-type margin-control">
            <lable className="lable-names">Company Name</lable>
            <input
              type="text"
              placeholder="Company Name"
              id="1"
              className="input-names width-input-control"
            />
          </div>

          <div className="donation-type margin-control">
            <lable className="lable-names">Email</lable>
            <input
              type="text"
              placeholder="example@gmail.com"
              id="1"
              className="input-names width-input-control"
            />
          </div>

          <div className="phoneNumber-div">
            <lable className="lable-names margin-phoneNumber">
              Phone Number
            </lable>

            <div className="codeArea-phoneNumer">
              <input
                type="text"
                placeholder="Area Code"
                id="1"
                className="input-names area-code"
              />

              <input
                type="text"
                placeholder="Phone Number"
                id="1"
                className="input-names phone-number"
              />
            </div>
          </div>

          <div className="donation-type margin-control">
            <lable className="lable-names">Address</lable>
            <input
              type="text"
              placeholder="Street Address"
              id="1"
              className="input-names dona-street"
            />
          </div>

          <div className="donation-type margin-control">
            <input
              type="text"
              placeholder="Street Address 2"
              id="1"
              className="input-names dona-street"
            />
          </div>

          <div className="donor-names donar-gap">
            <input
              type="text"
              placeholder="City"
              id="1"
              className="input-names donar-city"
            />

            <input
              type="text"
              placeholder="State / Province"
              id="1"
              className="input-names  donar-city"
            />
          </div>

          <div className="donation-type margin-control">
            <input
              type="text"
              placeholder="Postal / Zip code"
              id="1"
              className="input-names dona-street"
            />
          </div>

          <div className="wrapper-btn">
            <button className="formSubmitButton">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function DonationDonateButton() {
  return (
    <div className="div-wrapper">
      <div className="donate-button">
        <p className="donate-paragraph">Help us educate a Child</p>
        <button className="help-button">Donate</button>
      </div>
    </div>
  );
}

function DonationCidiSubscribe() {
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

function DonationFooter() {
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
export default Donate;
