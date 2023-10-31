import React from 'react';
import './styles.css'

const Portfolio = () => {
  return (
    <div>
      <header>
        <h1>Veera Badri</h1>
        <p>Full Stack Developer</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I'm a passionate Full Stack Developer with experience in building web
          applications. I enjoy learning new technologies and solving problems.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            velit nam at facere libero praesentium natus soluta quibusdam
            consequatur cum error ad. Debitis cupiditate atque maxime numquam a
            dolore soluta!
          </p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            velit nam at facere libero praesentium natus soluta quibusdam
            consequatur cum error ad. Debitis cupiditate atque maxime numquam a
            dolore soluta!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
