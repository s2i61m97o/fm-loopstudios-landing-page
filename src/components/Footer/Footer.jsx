import Nav from "../Nav/Nav";
import logo from "/src/assets/logo.svg";
import fbLogo from "/src/assets/icon-facebook.svg";
import twitterLogo from "/src/assets/icon-twitter.svg";
import pinLogo from "/src/assets/icon-pinterest.svg";
import instaLogo from "/src/assets/icon-instagram.svg";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <section className="nav-container">
        <img src={logo} alt="Loopstudios Logo" />
        <Nav />
      </section>
      <section className="social-container">
        <div className="social-links">
          <a href="https://www.facebook.com/">
            <img src={fbLogo} alt="Facebook logo" />
          </a>
          <a href="https://x.com/">
            <img src={twitterLogo} alt="Twitter logo" />
          </a>
          <a href="https://uk.pinterest.com/">
            <img src={pinLogo} alt="Pinterest logo" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instaLogo} alt="Instagram logo" />
          </a>
        </div>
        <p>© 2021 Loopstudios. All rights reserved.</p>
      </section>
    </footer>
  );
}
