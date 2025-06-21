import React from "react";

function AboutUs() {
  return (
    <div className="">
      <About />
      <WhoWeAreImage />
      <ImageWord />
      <MissionVission />
      <CoreValues />
      <OurTeam />
      {/* <DonateButton /> */}
      <CidiSubscribe />
      <Footer />
    </div>
  );
}

function About() {
  return (
    <div className="aboutUs">
      <h2 className="heading-one-about">About Us</h2>
    </div>
  );
}

function WhoWeAreImage() {
  return (
    <div className="div-wrapper">
      <div className="who-we-image">
        <div className="about-words">
          <h4 className="sub-heading-about">Who We Are</h4>
          <p className="about-paragraph">
            CIDI is a registered National NGO under NGO Act No 24, 2002 of the
            Laws
          </p>

          <p className="about-paragraph">
            of United Republic of Tanzania, with Registration number
            <span className="oongo"> 00NGO/</span>
          </p>

          <span className="oongo">R/2765.</span>
          <p className="about-paragraph">
            It operates to promote access to Information relating to Education,
          </p>

          <p className="about-paragraph">
            Agriculture, Environment and Sustainable Energy in Tanzania. We
            uphold,
          </p>

          <p className="about-paragraph">
            nurture and abide by the core values of volunteerism, tolerance,
            gender
          </p>

          <p className="about-paragraph">
            equality, non-discrimination, participation, transparency and
          </p>

          <p className="about-paragraph">
            accountability, and strive to become and remain a member driven
          </p>

          <p className="about-paragraph">organization.</p>
        </div>

        <div className="about-image">
          <img src="/image/crop.png" className="crops-img" alt="crops" />

          <img src="/image/cow.png" className="cow" alt="crops" />
        </div>
      </div>
    </div>
  );
}

function ImageWord() {
  return (
    <div className="div-wrapper-for-image-words">
      <div className="image-words">
        <div className="about-image">
          <img src="/image/women.png" className="crops-img" alt="crops" />

          <img
            src="/image/young-men.png"
            className="youngMen"
            alt="young men"
          />
        </div>

        <div>
          <div className="about-words">
            <h4 className="sub-heading-about">Who We Are</h4>

            <p className="about-paragraph aboutFontSize">
              CIDI represents the interest of the multi-sector wishing to
              facilitate
            </p>

            <p className="about-paragraph">
              educate, inform and promote the development growth and
            </p>

            <p className="about-paragraph">
              expansion of different multi-sectorial industries on poverty
            </p>

            <p className="about-paragraph">
              alleviation in education, information, agriculture, capacity
              building
            </p>

            <p className="about-paragraph">
              and other initiatives through reciprocity,
            </p>

            <p className="about-paragraph">
              Dialogue and working closely with the relevant Government and
            </p>

            <p className="about-paragraph">non-Government bodies in Tanzania</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MissionVission() {
  return (
    <div className="div-wrapper">
      <div className="missionVision">
        <h4 className="mission-heading">Mission and Vision</h4>

        <p className="mission-paragraph">
          The organization shall be voluntary, consultative, non-government,
          non-political and
        </p>

        <p className="mission-paragraph">
          non-profit making with the sole focus on the growth and development in
          improving the
        </p>

        <p className="mission-paragraph">
          quality of life to all it serves through participatory approach on
          different development
        </p>

        <p className="mission-paragraph">initiatives of Tanzania.</p>
      </div>
    </div>
  );
}

function CoreValues() {
  return (
    <div className="div-wrappe">
      <div className="core-values">
        <h3 className="coreValue-heading">Core Values</h3>

        <div className="core-values-paragraph">
          <p className="paragraph-value">
            To improve living standards of community members through improved
            livelihoods, promote availability and accessibility of
          </p>

          <p className="paragraph-value">
            information and resources to overcome poverty and misery through
            different initiatives that are education based on all levels,
            religious
          </p>

          <p className="paragraph-value">
            counselling, agriculture, manufacturing and infrastructure based on
            practical business initiatives.
          </p>

          <div className="value-list">
            <nav>
              <ul>
                <li>Professionalism</li>
              </ul>
              <ul>
                <li>Honest</li>
              </ul>
              <ul>
                <li> Transparency </li>
              </ul>
            </nav>

            <nav>
              <ul>
                <li>Professionalism</li>
              </ul>
              <ul>
                <li>Honest</li>
              </ul>
              <ul>
                <li> Transparency </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

function OurTeam() {
  return (
    <div className="div-wrapper">
      <div className="our-team">
        <h2 className="ourTeam-heading">Our Team</h2>

        <div className="team-image">
          <img
            src="/image/henry.png"
            alt="peoples in our team"
            className="team-photos"
          />
          <img
            src="/image/naima.png"
            alt="peoples in our team"
            className="team-photos"
          />
          <img
            src="/image/awedson.png"
            alt="peoples in our team"
            className="team-photos"
          />
          <img
            src="/image/awedson.png"
            alt="peoples in our team"
            className="team-photos"
          />
          <img
            src="/image/naima.png"
            alt="peoples in our team"
            className="team-photos"
          />
          <img
            src="/image/henry.png"
            alt="peoples in our team"
            className="team-photos"
          />
        </div>

        <h2 className="heading-fqas">FAQ’s</h2>

        <div className="faqs">
          <div className="words-button">
            <p className="faqs-paragraph">What is CIDI?</p>
            <button className="plus">
              <img
                src="/image/plus.png"
                alt="plus sign"
                className="plus-image"
              />
            </button>
          </div>

          <div className="words-button">
            <p className="faqs-paragraph">How to Donate?</p>
            <button className="plus">
              <img
                src="/image/plus.png"
                alt="plus sign"
                className="plus-image"
              />
            </button>
          </div>

          <div className="words-button">
            <p className="faqs-paragraph">Become a Volunteer</p>
            <button className="plus">
              <img
                src="/image/plus.png"
                alt="plus sign"
                className="plus-image"
              />
            </button>
          </div>

          <div className="words-button none-border">
            <p className="faqs-paragraph">CIDI and WASH Program</p>
            <button className="plus">
              <img
                src="/image/plus.png"
                alt="plus sign"
                className="plus-image"
              />
            </button>
          </div>
           <div className="help-donate-about">
          <p className="help-color">Help us educate a Child</p>

          <a href="donate" className="button-donate">
            Donate
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}

// function DonateButton() {
//   return (
//     <div className="div-wrapper">
//       <div className="donate-button">
//         <p className="donate-paragraph">Help us educate a Child</p>
//         <button className="help-button">Donate</button>
//       </div>
//     </div>
//   );
// }


function CidiSubscribe() {
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

function Footer() {
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


export default AboutUs;
