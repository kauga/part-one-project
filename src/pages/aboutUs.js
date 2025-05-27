import React from "react";

function AboutUs() {
  return (
    <div className="div-wrappe">
      <About />
      <WhoWeAreImage />
      <ImageWord />
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
  return <div className="image-words">kauga</div>;
}

export default AboutUs;
