import React from "react";

import classes from "./About.module.css";
import Aside from "../../Aside/Aside";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className={classes.PageContainer}>
          <article>
            <h1 className="l-heading">About Our Organization</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vel
              cumque. Adipisci voluptate error eligendi sunt aliquam impedit
              animi rerum laudantium non. Cumque tempora ipsa officiis ducimus,
              esse dignissimos ullam nisi itaque fuga minima vel possimus qui
              recusandae iste, mollitia pariatur, laudantium excepturi autem
              quae numquam facilis. Soluta, necessitatibus obcaecati!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              pariatur, cumque commodi neque libero facilis eum necessitatibus
              distinctio hic! Explicabo autem, recusandae sit ipsam praesentium
              obcaecati. Doloribus cum est qui quae praesentium libero!
              Similique quam enim consectetur facere reiciendis quis commodi
              labore quibusdam. Rerum officia maxime molestiae impedit placeat
              qui inventore sed ea neque, animi blanditiis fugiat quos ut
              eveniet est adipisci aspernatur expedita natus optio doloremque
              nostrum pariatur, officiis sequi. Aut libero quae explicabo dolore
              itaque non animi dignissimos, inventore aliquam soluta incidunt,
              obcaecati, totam repellat assumenda corrupti quam voluptates.
              Maxime illum maiores cupiditate voluptatibus nulla. Voluptatum at
              laborum omnis ducimus earum quisquam illum, labore quod possimus
              quaerat ex cum nemo amet ipsa rem, dolores cupiditate veniam optio
              illo voluptas culpa explicabo modi. Qui obcaecati odit error
              itaque laboriosam, corporis quo! Libero maxime minus molestias
              voluptatem dolore ea dignissimos, vitae excepturi sequi corrupti
              illum dolores! Enim ea esse explicabo.
            </p>
          </article>
          <Aside bg="bg-primary"/>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
