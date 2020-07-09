import React from "react";

import Logo from "../../UI/Logo/Logo";
import logoUrl from "../../assets/img/logo_light.png";
import Button from "../../UI/Button/Button";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={[classes.MainFooter, "py-2"].join(" ")}>
      <div className={[classes.FooterContainer, "container"].join(" ")}>
        <div>
          <Logo url={logoUrl} />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            totam perferendis fugiat deserunt itaque reiciendis assumenda
            incidunt dolore nam praesentium.
          </p>
        </div>
        <div>
          <h3>Email NewsLetter</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <form>
            <input type="email" placeholder="Enter Email" />
            <Button link="/" bg="primary" width="90%">
              Subscribe
            </Button>
          </form>
        </div>
        <div>
          <h3>Site Links</h3>
          <ul className="list">
            <li>
              <a href="/">Help & Support</a>
            </li>
            <li>
              <a href="/">Privacy & Policy</a>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Join Our Club</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            saepe!
          </p>
          <Button link="/" bg="secondary" width="50%">
            Join Now
          </Button>
        </div>
        <div>
          <p>
            Copyright &copy; {new Date().getFullYear()}, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
