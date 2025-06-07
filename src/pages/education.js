import React from "react";

function EducationPage() {
  return (
    <div className="">
      <EducationIntro />
      <EducationDonateButton />
      <EducationCidiSubscribe />
      <EducationFooter />
    </div>
  );
}

function EducationIntro() {
  return (
    <div className="div-wrapper">
      <div className="educationIntro">
        <h2 className="education-header">Education</h2>
        <span className="down-arrow">
          <img
            src="/image/downArrow.png"
            className="downarrow"
            alt="down arrow"
          />
        </span>

        <div className="imageDonateNow">
          <img
            src="/image/student.png"
            className="student-image"
            alt="student"
          />

          <div className="donate-now">
            <p className="donotenow-paragraph">Help us, Help</p>
            <p className="donotenow-paragraph">them to reach for</p>
            <p className="donotenow-paragraph">their Dreams..</p>

            <div className="div-anchor">
              <a href="donate" className="donatenow-anchor">
                Donate Now
              </a>
            </div>
          </div>
        </div>

        <div className="all-paragraph-div">
          <p className="all-paragraph">
            CIDI believes that good quality publicly funded education is
            paramount to every child and should not be
          </p>
          <p className="all-paragraph">
            negotiable. We will work with communities, governments and partners
            to remove barriers to girls’
          </p>
          <p className="all-paragraph">
            education and promote gender equality in education.
          </p>
        </div>

        <div className="quotesion-div">
          <img src="/image/qt-two.png" className="qts" alt="quotes" />
          <p className="all-paragraph black-color">
            A child’s early years are the foundation for his or her future
            development, providing a
          </p>

          <p className="all-paragraph black-color">
            strong base for lifelong learning and learning abilities, including
            cognitive and social
          </p>

          <p className="all-paragraph black-color">development.</p>
        </div>

        <div className="technology-div">
          <h3 className="technology-heading">Children and Technology</h3>

          <div className="bach-one-div">
            <p className="all-paragraph">
              The nature of the technology makes a difference to children’s
              experiences. We are interested in
            </p>

            <p className="all-paragraph">
              technologies used for entertainment, communication, work and
              study, such as smart toys, second
            </p>
            <p className="all-paragraph">
              screens, video streamed content for tablets and products using NFC
              (near field communication). Our
            </p>
            <p className="all-paragraph">
              work in this project will include basic research into children’s
              learning with technology, developing
            </p>
            <p className="all-paragraph">
              apps, the evaluation of specific products, looking at usability
              and exploring the values, attitudes and
            </p>
            <p className="all-paragraph">
              preferences of children and grown-ups.
            </p>
          </div>

          <div className="bach-one-div">
            <p className="all-paragraph">
              We have experience with a range of approaches to research, from
              detailed second-by-second video
            </p>
            <p className="all-paragraph">
              analysis of children’s interactions to focus groups, expert
              panels, visual methods, in-depth case
            </p>
            <p className="all-paragraph">
              studies and experimental approaches, whether in the home, at
              school, or elsewhere.
            </p>
          </div>

          <div className="bach-two-div">
            <p className="all-paragraph">
              Beyond this focus on children and technology, our theoretical and
              methodological orientations vary
            </p>
            <p className="all-paragraph">
              depending on the project, what we want to know, and the team’s
              areas of expertise. Most of our
            </p>
            <p className="all-paragraph">
              research revolves around different combinations of six themes:
              learning, pedagogy, design
            </p>
            <p className="all-paragraph">
              cognition, culture, and context. We are interested in where, with
              whom, why and how children
            </p>
            <p className="all-paragraph">interact with technology.</p>
          </div>

          <img
            src="/image/student-two.png"
            className="student-two-image"
            alt="student"
          />

          <h3 className="student-two-heading">Technology in Schools</h3>

          <div className="learn-bt">
            <a className="learn-btn" href="learn">
              Learn More
            </a>
          </div>

          <h3 className="fqa-heading">FAQ’s</h3>

          <div className="faqs-education">
            <div className="words-button">
              <p className="faqs-paragraph-education">What to Donate? </p>
              <button className="plus">
                <img
                  src="/image/plus.png"
                  alt="plus sign"
                  className="plus-image"
                />
              </button>
            </div>

            <div className="words-button">
              <p className="faqs-paragraph-education reducing-linHeight">
                How much of my donation is going directly to people in need?
              </p>
              <button className="plus">
                <img
                  src="/image/plus.png"
                  alt="plus sign"
                  className="plus-image"
                />
              </button>
            </div>

            <div className="words-button">
              <p className="faqs-paragraph-education">
                How will my donation be used?
              </p>
              <button className="plus">
                <img
                  src="/image/plus.png"
                  alt="plus sign"
                  className="plus-image"
                />
              </button>
            </div>

            <div className="words-button">
              <p className="faqs-paragraph-education">
                Is there a minimum donation?
              </p>
              <button className="plus">
                <img
                  src="/image/plus.png"
                  alt="plus sign"
                  className="plus-image"
                />
              </button>
            </div>

            <div className="words-button">
              <p className="faqs-paragraph-education">
                I don't have much money. Can I still help?
              </p>
              <button className="plus">
                <img
                  src="/image/plus.png"
                  alt="plus sign"
                  className="plus-image"
                />
              </button>
            </div>

            <div className="words-button">
              <p className="faqs-paragraph-education">
                Can I make a donation by check?
              </p>
              <button className="plus">
                <img
                  src="/image/plus.png"
                  alt="plus sign"
                  className="plus-image"
                />
              </button>
            </div>

            <div className="words-button none-border">
              <p className="faqs-paragraph-education">
                What are the methods of payment?
              </p>
              <button className="plus">
                <img
                  src="/image/plus.png"
                  alt="plus sign"
                  className="plus-image"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationDonateButton() {
  return (
    <div className="div-wrapper">
      <div className="donate-button">
        <p className="donate-paragraph">Help us educate a Child</p>
        <button className="help-button">Donate</button>
      </div>
    </div>
  );
}

function EducationCidiSubscribe() {
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

function EducationFooter() {
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

export default EducationPage;
