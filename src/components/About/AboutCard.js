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
            <br /> I'm a Graduate majoring in <span className="purple">Computer Science & Engineering</span>
            <br /> from <span className="purple">North South University,</span>  Bangladesh.
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
