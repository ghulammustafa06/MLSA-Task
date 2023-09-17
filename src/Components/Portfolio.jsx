/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/books.jpg";

const imageAltText = "A books library, with full of different books";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Creative Canvas: Recent Graphic Design Projects 🎉",
    description:
      "Welcome to my portfolio! Here, you'll find a collection of my latest graphic design work. Each piece is a unique blend of creativity, technique, and purpose. From branding elements to eye-catching visuals, explore how I bring ideas to life through design. Take a look and get inspired!",
    url: "https://drive.google.com/drive/folders/1nhyZ5PqCz-H-Wrd8KjC8TK_AYWchbYWK?usp=drive_link",
  },
  {
    title: "I created a C++ course Series on youtube",
    description:
      "Dive into the world of C++ programming with my in-depth course series on YouTube. Whether you're a beginner or looking to refine your skills, this series covers everything from the basics to advanced concepts. Join me on this educational journey and unlock the full potential of C++. Happy coding!",
    url: "https://www.youtube.com/watch?v=O5nHseZVmvI&t=5s",
  },
  {
    title: "My Portflio website where I use Html and Css",
    description:
      "Explore my portfolio website, where I've brought together the power of HTML and CSS to showcase my creative endeavors. From elegant layouts to seamless navigation, witness how these languages converge to create an engaging user experience. Dive in and discover the artistry behind web design!",
    url: "https://ghulammustafa06.github.io/MustafaPortfolio/",
  },
  {
    title: "Professional Journey: My Resume",
    description:
      "This is my comprehensive resume, highlighting my skills, experience, and accomplishments. It reflects my dedication to excellence and showcases my professional journey. Take a closer look to learn more about my background and qualifications.",
    url: "https://drive.google.com/file/d/1y6FDak_OHlUOd_NXRCVrwo2XlYDagRO0/view?usp=drive_link",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
