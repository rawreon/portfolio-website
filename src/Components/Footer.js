import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url} rel="noreferrer" target="_blank">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer id="footer">
        <div className="row">
          <Fade bottom>
            <div className = "contact-foot">
              <h2>Contact me at:</h2>
              <h3>wayneji890@gmail.com</h3>
            </div>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>
                  Inspired by{" "}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    Styleshout, Tweaked by Me
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
