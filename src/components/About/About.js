import React from "react";
import githubLogo from "../../images/GitHub-Logo.svg";
import linkedinLogo from "../../images/LinkedIn-Logo.svg";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-section">
        <h4 className="about-by">ABOUT</h4>
        <p className="about-para">
          An application for the kid and life-long learner in all of us. Create
          a field trip or join an already created one and go explore something
          new.
        </p>
      </div>
      <div className="created-by">
        <h4 className="created-by">CREATED BY</h4>
      </div>
      <div className="creators">
        <div className="creator">
          <p className="about-name">Mary Ballantyne:</p>
          <a href="https://www.linkedin.com/in/mary-ballantyne-2712241b2/">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          |
          <a href="https://github.com/mballantyne3">
            <img
              className="link-logo"
              src={githubLogo}
              alt="GitHub logo"
              height="50vh"
            />
          </a>
        </div>
        <div className="creator">
          <p className="about-name">Carissa Gross:</p>
          <a href="https://www.linkedin.com/in/carissa-gross/">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          |
          <a href="https://github.com/carissagross">
            <img
              className="link-logo"
              src={githubLogo}
              alt="GitHub logo"
              height="50vh"
            />
          </a>
        </div>
        <div className="creator">
          <p className="about-name">Andrew Knapick:</p>
          <a href="https://www.linkedin.com/in/andrew-knapick/">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          |
          <a href="https://github.com/Universal-Patois">
            <img
              className="link-logo"
              src={githubLogo}
              alt="GitHub logo"
              height="50vh"
            />
          </a>
        </div>
        <div className="creator">
          <p className="about-name">Dinne Kopelevich:</p>
          <a href="https://www.linkedin.com/in/dinne-kopelevich-174584a/">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          |
          <a href="https://github.com/DinneK">
            <img
              className="link-logo"
              src={githubLogo}
              alt="GitHub logo"
              height="50vh"
            />
          </a>
        </div>
        <div className="creator">
          <p className="about-name">A.J. Krumholz:</p>
          <a href="https://www.linkedin.com/in/aj-krumholz/">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          |
          <a href="https://github.com/ajkrumholz">
            <img
              className="link-logo"
              src={githubLogo}
              alt="GitHub logo"
              height="50vh"
            />
          </a>
        </div>
        <div className="creator">
          <p className="about-name">Andrew Mullins:</p>
          <a href="https://www.linkedin.com/in/andrewmullins233/">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          |
          <a href="https://github.com/mullinsand">
            <img
              className="link-logo"
              src={githubLogo}
              alt="GitHub logo"
              height="50vh"
            />
          </a>
        </div>
        <div className="creator">
          <p className="about-name">Matthew Press:</p>
          <a href="https://www.linkedin.com/in/matthew-press-813961246/">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          |
          <a href="https://github.com/MatthewPress">
            <img
              className="link-logo"
              src={githubLogo}
              alt="GitHub logo"
              height="50vh"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
