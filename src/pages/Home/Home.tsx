import React, { useEffect } from 'react';

import {
  skyScannerLogo,
  bookingLogo,
  hostelWorldLogo,
  gygLogo,
  distributionLogo,
  fireIcon,
  timeIcon,
  ticketIcon,
  groupIcon,
  featureIcon,
  checkMarkIcon,
  featureC2Icon,
  hannahAvatar,
  luisaAvatar,
  jonasAvatar,
} from 'assets';
import { Carousel } from 'components';
import { useAppSelector, useAppDispatch } from 'redux/hooks';

import { getImages, getMemoizedImages } from './HomeSlice';

import './Home.scss';

const itineraries = [
  { text: `Buche Reiserouten von anderen Backpackern` },
  { text: `Lerne von ihren Bewertungen, Erfahrungen und Tipps` },
  { text: ` Werde Travel Star und teile deine Reiserouten mit der Welt` },
];

const testimonial = [
  {
    name: 'Hannah',
    alt: 'Hannah avatar',
    src: hannahAvatar,
    description: `„Als Backpacker will ich nicht dahin, wo alle anderen auch hingehen. Hier aber kann ich Reiseziele finden, die genau zu mir passen.“`,
  },
  {
    name: 'Luisa',
    alt: 'Luisa avatar',
    src: luisaAvatar,
    description: `„Die Webapp ist ein tolles Tool, um eigene Reisen zu dokumentieren und mit Familie und Freunden zu teilen.“`,
  },
  {
    name: 'Jonas',
    alt: 'Jonas avatar',
    src: jonasAvatar,
    description: `„Es gibt nichts nervigeres, als Flüge und Unterkünfte herauszusuchen. Danke, dass ihr mir das abnehmt!“`,
  },
];
const companies = [
  {
    src: skyScannerLogo,
    alt: 'skyscanner',
  },
  {
    src: bookingLogo,
    alt: 'booking',
  },
  {
    src: hostelWorldLogo,
    alt: 'hostelworld',
  },
  {
    src: gygLogo,
    alt: 'gyg',
  },
  {
    src: distributionLogo,
    alt: 'distribution',
  },
];

const options = [
  {
    src: fireIcon,
    text: 'Fehlende Inspiration',
  },
  {
    src: timeIcon,
    text: 'Keine Zeit für die Planung',
  },
  {
    src: ticketIcon,
    text: 'Buchungsschwierigkeiten Kein',
  },
  {
    src: groupIcon,
    text: 'Travel-Buddy',
  },
];

const info = [
  { text: 'Entdecke neue Orte' },
  {
    text: 'Gib Reisezeitraum und Budget an',
  },
  {
    text: 'Finde die besten Reiserouten in deinem Reiseziel',
  },
];
const Home = () => {
  const dispatch = useAppDispatch();
  const imagesList = useAppSelector(getMemoizedImages);
  useEffect(() => {
    dispatch(getImages());
  }, []);

  return (
    <div className="homeContainer">
      <section className="banner">
        <div className="content">
          <h1>Erstelle, teile und buche Backpacking Routen</h1>
          <p>
            Tausche Travel-Storys und Reiserouten mit unserer Community aus und
            buche dein nächstes Abenteuer.
          </p>
          <a href="/about" className="start">
            Reise starten
            <svg
              width="16px"
              height="13px"
              viewBox="0 0 16 13"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.35225 0.898347C8.82088 0.429718 9.58068 0.429718 10.0493 0.898347L14.8493 5.69835C15.3179 6.16698 15.3179 6.92677 14.8493 7.3954L10.0493 12.1954C9.58068 12.664 8.82088 12.664 8.35225 12.1954C7.88362 11.7268 7.88363 10.967 8.35225 10.4983L11.1037 7.74688L2.00078 7.74688C1.33804 7.74688 0.800781 7.20962 0.800781 6.54688C0.800781 5.88413 1.33804 5.34688 2.00078 5.34688H11.1037L8.35225 2.5954C7.88363 2.12677 7.88363 1.36698 8.35225 0.898347Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
      </section>

      <section className="trust">
        <h2>Unsere Partner</h2>
        <div className="companies">
          {companies.map(({ src, alt }) => (
            <img key={alt} src={src} alt={alt} />
          ))}
        </div>
      </section>

      <section className="options">
        <h2 className="title">
          Als Backpacker kennst du sicherlich diese Probleme...
        </h2>

        <div className="items">
          {options.map(({ src, text }) => (
            <div key={text} className="item">
              <img src={src} alt={text} width="80" />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="feature feature--create">
        <div className="image image--desktop">
          <img
            alt="Erstelle individuelle Reiserouten in nur wenigen Schritten."
            src={featureIcon}
          />
        </div>

        <div className="info">
          <p className="title">
            <span className="text-bl">Erstelle</span>
            individuelle
            <br />
            Reiserouten in nur
            <br />
            wenigen Schritten.
          </p>

          <img
            className="image image--mobile"
            alt="Erstelle individuelle Reiserouten in nur wenigen Schritten."
            src={featureIcon}
          />

          <p className="sub-title">
            Lästige Reiseplanung war gestern. Unsere WebApp
            <br />
            erstellt dir deine individuell angepasste Reiseroute - je nach
            Interessen und Budget.
          </p>

          <ul>
            {info.map(({ text }) => (
              <li key={text}>
                <img alt="Check mark icon" src={checkMarkIcon} width="15" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="feature feature--share">
        <div className="info">
          <p className="title">
            <span className="text-bl">Teile</span>
            Reiserouten mit
            <br />
            anderen Backpackern
          </p>

          <img
            className="image image--mobile"
            alt="Teile Reiserouten mit anderen Backpackern"
            src={featureC2Icon}
          />

          <p className="sub-title">
            Lass dich von anderen Routen inspirieren und teile deine eigene
            Reiseerfahrung.
          </p>

          <ul className="list">
            {itineraries.map(({ text }) => (
              <li key={text}>
                <img alt="Check mark icon" src={checkMarkIcon} width="15" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="image">
          <img
            alt="Teile Reiserouten mit anderen Backpackern"
            src={featureC2Icon}
          />
        </div>
      </section>
      <section className="image-carousel">
        <Carousel data={imagesList} />
      </section>

      <section className="backpackers">
        <h2>Was Backpacker über uns sagen:</h2>
        <div className="items">
          {testimonial.map(({ name, alt, src, description }) => (
            <div key={name} className="item">
              <img src={src} alt={alt} />
              <span className="name">{name}</span>
              <p className="description">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Home;
