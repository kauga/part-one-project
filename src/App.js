import AboutUs from "./pages/aboutUs";
import EducationPage from "./pages/education";
import Donate from "./pages/donate";
import ContactUs from "./pages/contact";

export default function App() {
  return (
    <div className="div-wrappe">
      <div id="root">
        <Header />
        <MisweLivestock />
        <WhoWeAre />
        <OurService />
        <VolunteerTestimonial />
        <HelpUsDonate />
        <CidiSubscribe />
        <Footer />
        <AboutUs />
        <EducationPage />
        <Donate />
        <ContactUs />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="div-wrappe">
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
              <a href="home" className="link-style home">
                Home
              </a>
              <a href="home" className="link-style">
                About
              </a>
              <a href="home" className="link-style">
                Projects
              </a>
              <a href="home" className="link-style">
                Donation
              </a>
              <a href="home" className="link-style">
                News and Events
              </a>
              <a href="home" className="link-style">
                Contact Us
              </a>
            </div>
            <nav>
              <a href="buy" className="green-link">
                Donate now
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

function MisweLivestock() {
  return (
    <div className="div-wrappe">
      <div className="misweTogether">
        <div
          className="miswe-background"
          style={{ backgroundImage: "url('/crop-farm.png')" }}
        >
          <h1 className="heading-primary margin-bottom">
            Miswe Livestock and Crop
          </h1>
          <h1 className="heading-primary margin-bottom-40">
            Production Project
          </h1>

          <div className="two-button">
            <button className="button--one">Learn More</button>
            <a href="home" className="button--two">
              Make Donation
            </a>
          </div>
        </div>

        <div className="together-div">
          <p className="newsHeading">News and Events </p>
          <div>
            <h4 className="heading-four">Together to Make Tanzania Better</h4>
            <p className="togetherParagraph">
              Please Help Us Change Lives in Tanzania
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhoWeAre() {
  return (
    <div className="div-wrapper">
      <div className="whoWeAre">
        <div className="who-we-are">
          <h5 className="heading-five">Who We Are?</h5>

          <p className="who-paragraph">
            Community Information Development Initiatives (CIDI) is a non
            governmental organisation based in Tanzania mainland . CIDI was
            registered National NGO under NGO Act of the law of united republic
            of Tanzania under ministry of Health, Community
            Development,Gender,Eldery and Children .<br />
          </p>

          <p className="who-paragraph who-margin-top">
            CIDI is an education and agricultural based organisation with its
            main projects being quality improved education and agructural
            economic activities.
          </p>

          <p className="who-paragraph who-margin-top">
            CIDI is for marginalised people Particularly children ,youth ,and
            women
          </p>

          <button className="now-more-button">Know More</button>
        </div>

        <div className="twoImages">
          <img
            src="/image/image-one.png"
            className="backward-image"
            alt="student"
          />
          <img src="/image/farmer.png" alt="farmer" className="farmer-image" />
        </div>
      </div>
    </div>
  );
}

function OurService() {
  return (
    <div className="div-wrapper">
      <div className="Our-service">
        <h6 className="heading-six">Our Services</h6>
        <h4 className="secondary-heading">What we Do</h4>

        <div className="we-Do-div">
          <div className="agriculture">
            <img src="/image/hand-leaf.png" className="icon-we-do" alt="leaf" />

            <nav className="title-paragraph">
              <h1 className="we-do-title">Agriculture/Livestock</h1>
              <p className="we-do-paragraph">Small Description with</p>

              <p className="we-do-paragraph  margin-bottom">BG Picture</p>

              <a href="wedo" className="learn-more-anchor">
                Learn More <span>→</span>
              </a>
            </nav>
          </div>

          <div className="education">
            <img
              src="/image/education.png"
              className="icon-we-do"
              alt="education cap"
            />

            <nav className="title-paragraph">
              <h1 className="we-do-title">Education</h1>
              <p className="we-do-paragraph">Small Description with</p>

              <p className="we-do-paragraph  margin-bottom">BG Picture</p>

              <a href="wedo" className="learn-more-anchor">
                Learn More <span>→</span>
              </a>
            </nav>
          </div>

          <div className="water">
            <img
              src="/image/water.png"
              className="icon-we-do"
              alt="education cap"
            />

            <nav className="title-paragraph">
              <h1 className="we-do-title">WASH Programs</h1>
              <p className="we-do-paragraph">Small Description with</p>

              <p className="we-do-paragraph  margin-bottom">BG Picture</p>

              <a href="wedo" className="learn-more-anchor">
                Learn More <span>→</span>
              </a>
            </nav>
          </div>
        </div>

        <a href="view" className="kauga">
          View More
        </a>
      </div>
    </div>
  );
}

function VolunteerTestimonial() {
  return (
    <div className="div-wrapper">
      <div className="volunteer-testimonial">
        <h6 className="heading-six">Feedback</h6>
        <h5 className="secondary-heading">Volunteer Testimonials.</h5>

        <div className="slider">
          <div className="slide">
            <img
              src="/image/colons.png"
              alt="semi colon"
              className="semi-colons"
            />

            <p className="testimonial-paragraph">
              “Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit. Tellus nisi <br /> consectetur
              porta quam ut ultrices.
              <br /> Praesent nunc ”.
            </p>

            <span className="line">⎯</span>

            <img
              src="/image/image-four.png"
              className="testimonials-image"
              alt="testimonial"
            />

            <p className="name-testimonial">Kidibra</p>
          </div>

          <div className="slide">
            <img
              src="/image/colons.png"
              alt="semi colon"
              className="semi-colons"
            />

            <p className="testimonial-paragraph">
              “Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit. Tellus nisi <br /> consectetur
              porta quam ut ultrices.
              <br /> Praesent nunc ”.
            </p>

            <span className="line">⎯</span>

            <img
              src="/image/image-three.png"
              className="testimonials-image"
              alt="testimonial"
            />

            <p className="name-testimonial">Dalali Annular</p>
          </div>

          <div className="slide">
            <img
              src="/image/colons.png"
              alt="semi colon"
              className="semi-colons"
            />

            <p className="testimonial-paragraph">
              “Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit. Tellus nisi <br /> consectetur
              porta quam ut ultrices.
              <br /> Praesent nunc ”.
            </p>

            <span className="line">⎯</span>

            <img
              src="/image/image-two.png"
              className="testimonials-image"
              alt="testimonial"
            />

            <p className="name-testimonial">Kinate</p>
          </div>
        </div>

        <nav className="previous-next-button">
          <button className="button--button prev-button">←</button>
          <button className="button--button next-button">→</button>
        </nav>
      </div>
    </div>
  );
}

function HelpUsDonate() {
  return (
    <div className="div-wrapper">
      <div className="help-donate">
        <p className="help-paragraph">Help us Improve Agriculture Livelihood</p>

        <a href="donate" className="button-donate">
          Donate
        </a>
      </div>
    </div>
  );
}

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
