import React from 'react';

import { aboutC1, aboutC2 } from 'assets';
import './About.scss';

const About = () => {
  return (
    <div className="aboutContainer">
      <section className="banner">
        <div className="content">
          <h1>Willkommen im Tribe!</h1>
          <p>
            Unser außergewöhnlicher Tribe besteht aus mehr als 20 Nationen, die
            alle eine Leidenschaft teilen: das Backpacking. Als Teil des Tribes
            arbeitest du nicht für uns, sondern mit uns!
          </p>
        </div>
      </section>

      <section className="feature feature--create">
        <div className="image image--desktop">
          <img alt="Sich selbst kennenlernen" src={aboutC1} />
        </div>

        <div className="info">
          <p className="title">
            Sich
            <br />
            selbst
            <span className="text-bl">kennenlernen</span>
          </p>

          <img
            className="image image--mobile"
            alt="Sich selbst kennenlernen"
            src={aboutC1}
          />

          <p className="sub-title">
            Reisen erweitert den Horizont. Nicht nur bezüglich der Welt dort
            draußen, sondern auch bezüglich einem selbst. Was treibt dich an?
            <br />
            Was gibt dir Kraft? Was beflügelt dich, um deine Komfortzone zu
            verlassen und als Mensch zu wachsen? Gehe hinaus in die Welt und
            finde es heraus.
          </p>
        </div>
      </section>

      <section className="feature feature--share">
        <div className="info">
          <p className="title">
            Andere
            <span className="text-bl">kennenlernen</span>
          </p>

          <img
            className="image image--mobile"
            alt="Andere kennenlernen"
            src={aboutC2}
          />

          <p className="sub-title">
            Die Erde ist groß und bunt und so sind ihre Bewohner. Vielleicht
            triffst du Reisende, die dich einen Schritt begleiten, nur weil sich
            eure Wege kreuzen.
            <br />
            Oder du triffst Locals, die dir Land und Kultur näherbringen können.
            Suche aktiv nach dem Kontakt zu Anderen und du wirst schnell Freunde
            auf der ganzen Welt haben.
          </p>
        </div>

        <div className="image">
          <img alt="Andere kennenlernen" src={aboutC2} />
        </div>
      </section>
    </div>
  );
};
export default About;
