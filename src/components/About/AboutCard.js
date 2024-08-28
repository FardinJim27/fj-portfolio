import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fardin Ahmed Jim </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br /> I'm a recent Graduate majoring in <span className="purple">Computer Science & Engineering </span>
             from <span className="purple">North South University,</span>  Bangladesh. As a recent graduate, 
             I am eager to bring my academic background and technical skills to <span className="purple">IT Companies</span>. With a strong foundation in <span className="purple">full-stack software development, artificial intelligence, data analysis, and 
             problem-solving</span>, I am well-equipped to contribute to IT team. My ability to collaborate effectively, 
             communicate clearly, and adapt quickly to new challenges will enable me to <span className="purple">drive impactful projects</span> and deliver innovative solutions.
            <br />
            {/* Additionally, I am currently employed as a software developer at
            Juspay. */}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Coin Collecting (Numismatics)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          
          <br />
          <br />

          <p style={{ color: "rgb(155 126 172)", fontSize: "2rem" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: "rgb(155 126 172)", fontSize: "1.5rem" }}>Fardin Jim</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
