import React from "react";

import Classes from "./Showcase.module.css";
import Button from "../../UI/Button/Button";

const Showcase = () => {
  return (
    <header id="Showcase">
      <div className={Classes.Showcase}>
        <div className="container">
          <div className={Classes.ShowcaseContainer}>
            <div className={Classes.ShowcaseContent}>
              <div className="category-sports category">
                Sports
              </div>
              <h1>Some Sports Article</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                earum dolorum molestiae, libero ea esse nam, iusto ducimus,
                cumque veritatis quisquam autem voluptate! Rem architecto
                voluptatibus est vero. Aspernatur, velit?
              </p>
              <Button link="/about" bg='primary' width="9rem">Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Showcase);
