import React, { Component } from "react";
import Slide from "react-reveal";


class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;
    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years} </em>
          </p>
          <p>{work.description}</p>
          <a href={work.url} rel="noreferrer" target="_blank" className="button1">
                      <i></i>Github
          </a>  
          
        </div>
      );
    });

    const resumeDownload = this.props.data.resumedownload;
    

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
   
    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div id = "projects" className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Projects</span>
              </h1>
            </div>
            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>
        
        <section id="pdf">
          <Slide left duration={1300}>
            <div className="row work">
              <div className="three columns header-col">
                <h1>
                  <span>Resume</span>
                </h1>
              </div>
              <div className="nine columns main-col">
                <object width="100%" height="700" data="grad_resume_ngp.pdf" type="application/pdf"></object>
              </div>
              <div className="nine columns main-col">
              <div className="row">
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button" rel="noreferrer" target="_blank">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
            </div>
          </Slide>
        </section>


        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>

        
      </section>
    );
  }
}

export default Resume;
