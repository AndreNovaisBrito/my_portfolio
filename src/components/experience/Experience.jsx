import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>BootStrap</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JQuery</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Back-End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PostGreSQL</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Docker</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>GitHub</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
