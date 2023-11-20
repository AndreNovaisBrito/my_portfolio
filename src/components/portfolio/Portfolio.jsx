import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Project Thumbnails/SortingVisualiser.png";
import IMG2 from "../../assets/Project Thumbnails/MyPortfolio.png";
import IMG3 from "../../assets/Project Thumbnails/TicTacToe.png";
import IMG4 from "../../assets/Project Thumbnails/Telegram bot.png";
import IMG5 from "../../assets/Project Thumbnails/URL Shortener.png";
import IMG6 from "../../assets/Project Thumbnails/Exercise tracker.png";

// import IMG4 from "../../assets/portfolio4.png";
// import IMG5 from "../../assets/portfolio5.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Sorting Visualiser",
    github: "https://github.com/AndreNovaisBrito/SortingVisualizer",
    demo: "https://andrenovaisbrito.github.io/SortingVisualizer/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Portfolio",
    github: "https://github.com/AndreNovaisBrito/my_portfolio",
    demo: "https://andrenovaisbrito.github.io/my_portfolio/",
  },
  {
    id: 3,
    image: IMG3,
    title: "TicTacToe",
    github: "https://github.com/AndreNovaisBrito/TicTacToe",
    demo: "https://andrenovaisbrito.github.io/TicTacToe/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Telegram Bot",
    github: "https://github.com/AndreNovaisBrito/Productive-Notifications",
    demo: "https://t.me/JustLetMeCreateaBot",
  },
  {
    id: 5,
    image: IMG5,
    title: "Url Shortener API",
    github:
      "https://replit.com/@AndreNovaisBrit/boilerplate-project-urlshortener#index.js",
    demo: "https://replit.com/@AndreNovaisBrit/boilerplate-project-urlshortener",
  },
  {
    id: 6,
    image: IMG6,
    title: "Exercise Tracker API",
    github:
      "https://replit.com/@AndreNovaisBrit/boilerplate-project-urlshortener",
    demo: "https://replit.com/@AndreNovaisBrit/boilerplate-project-urlshortener",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="porfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
