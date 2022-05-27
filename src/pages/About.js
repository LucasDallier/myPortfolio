import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import "../styles/About.css";
import IconCloud from "../components/IconCloud";

function About() {
  return (
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper about">
            <div className="about-container">
              <span className="span-tag html">{"<html>"}</span>
              <br />
              <span className="span-tag body">{"<body>"}</span>
              <br />
              <span className="span-tag content">{"<h1>"}</span>
              <h1 className="title-about">Hello,</h1>
              <span className="span-tag content">{"</h1>"}</span>
              <br />
              <span className="span-tag content">{"<p>"}</span>
              <p className="text-about">
                My name is{" "}
                <span className="span-highlight">Lucas Dallier Arraes</span> and
                I really enjoy solving problems through code. I have a degree in
                Systems Analysis and Development.
              </p>
              <p className="text-about">
                My focus is to be able to help improve people's lives by
                developing applications that are{" "}
                <span className="span-highlight">
                  accessible and functional
                </span>
                . Experience includes troubleshooting and testing, working in
                teams with deadlines and with exceptional deliverables.
              </p>
              <p className="text-about last">
                The skills I master/study:
                <span className="span-highlight">
                  {" "}
                  Html, CSS, JavaScript, TypeScript, React, Redux, ContextAPI,
                  Hooks, Git/Github.
                </span>
              </p>
              <span className="span-tag content">{"</p>"}</span>
              <br />
              <span className="span-tag body">{"</body>"}</span>
              <br />
              <span className="span-tag html">{"</html>"}</span>
            </div>
            <IconCloud />
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </body>
  );
}

export default About;
