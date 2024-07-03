import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Certificate1 from "../../Assets/Certificate1.png";
import Certificate2 from "../../Assets/Certificate2.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Paper</strong> Publication
        </h1>
        <p style={{ color: "white" }}>
          Alhamdulillah.🤍
          I am thrilled to announce that my paper titled <strong className="purple">"𝐄𝐚𝐫𝐭𝐡𝐪𝐮𝐚𝐤𝐞 𝐌𝐚𝐠𝐧𝐢𝐭𝐮𝐝𝐞 𝐏𝐫𝐞𝐝𝐢𝐜𝐭𝐢𝐨𝐧 𝐔𝐬𝐢𝐧𝐠 𝐌𝐚𝐜𝐡𝐢𝐧𝐞 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠 𝐓𝐞𝐜𝐡𝐧𝐢𝐪𝐮𝐞𝐬"</strong> has been published in <strong className="purple">𝐈𝐄𝐄𝐄 𝐗𝐩𝐥𝐨𝐫𝐞!</strong> 
          <br></br>
          <b><strong className="purple">Paper Link:</strong></b> <a href="https://ieeexplore.ieee.org/document/10502770"><b>https://ieeexplore.ieee.org/document/10502770</b></a>
        </p>

        <Row>
          <Col
              md={6}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={Certificate1} alt="about" className="img-fluid" />
          </Col>

          <Col
              md={6}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={Certificate2} alt="about" className="img-fluid" />
          </Col>
        </Row>
        
        

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
