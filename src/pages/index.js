import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            <span className="text-primary">{config.fullName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} {`    ·   `} {config.phone} {`    ·   `}
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I'm a software engineer based on HCMC, Vietnam <br />
            I have background in embedded programming, currently developing some desktop application 
            and moving forward into website back-end development.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Junior Platform Validation Engineer</h3>
              <div className="subheading mb-3">Ampere Computing</div>
              <p>
                Resposible for developing test application to test and validate multiple chip and platform systems. 
                The application is writen in Java and run cross platform.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Nov 2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Junior Logic Design Engineer</h3>
              <div className="subheading mb-3">Arrive Technologies</div>
              <p>
                Design and implement logic circuit target in telecommunication application.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jul 2018 - Nov 2018</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">HCMC University of Technology</h3>
              <div className="subheading mb-3">Bachelor of Engineer</div>
              <div>Electronics and Telecommunication Engineering </div>
              <p>GPA: 7.46/10</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2014 - Aug 2018</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Personal Projects</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa text-warning"></i>
              Nirvanas Operating System
            </li>
            <li>
              <i className="fa-li fa text-warning"></i>
              XdiagBrew
            </li>
            <li>
              <i className="fa-li text-warning"></i>
              Sonitux 
            </li>
            <li>
              <i className="fa-li text-warning"></i>
              PCIe Emulator
            </li>
            <li>
              <i className="fa-li text-warning"></i>
              DRAM Emulator
            </li>
            <li>
              <i className="fa-li text-warning"></i>
              ChessxChess
            </li>
          </ul>
        </div>
      </section>

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">

            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from writing code, I enjoy blogging and photography.
          </p>
        </div>
      </section>

      <hr className="m-0" />


    </div>
  </Layout>
);

export default IndexPage;
