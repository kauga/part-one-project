export default function App() {
  return (
    <div id="root">
      <Header />
      <MisweLivestock />
      <WhoWeAre />
      <OurService />
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

        <a href="view" className="view-more">View More</a>
      </div>
    </div>
  );
}
