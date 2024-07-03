import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import doorlock from "../../Assets/Projects/doorlock.png";
import earthquake from "../../Assets/Projects/earthquake.png";
import kitchen from "../../Assets/Projects/kitchen.png";
import studybud from "../../Assets/Projects/studybud.png";
import ehr from "../../Assets/Projects/ehr.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studybud}
              isBlog={false}
              title="Faculty Management Django"
              description="Student - Faculty Course Management using Django Framework. Students can join courses easily; where as faculties can manage course credentials easily too."
              ghLink="https://github.com/Fardin-JIm/FacultyManagement-Django"
              demoLink="https://www.youtube.com/@fardinahmedjim4307/videos"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={earthquake}
              isBlog={false}
              title="Earthquake Prediction using ML"
              description="Predicting earthquake by using the refined machine learning model. By implementing several machine learning techniques, makes the model more accurate and perfect."
              ghLink="https://github.com/FardinJim27/Earthquake-Prediction-using-Machine-Learning"
              demoLink="https://ieeexplore.ieee.org/document/10502770"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ehr}
              isBlog={false}
              title="Blockchain-based Secured Electronic Health Record Monitoring and Data Management System"
              description="More secred & more decentralized EHR System by adapting the Blockchain Technology."
              ghLink="#"
              demoLink="https://www.youtube.com/watch?v=PC9lgETGLLI"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doorlock}
              isBlog={false}
              title="Automated Door Locking System"
              description="A password-based door lock security system was constructed. This is a prototype of a security door lock that is password-protected and sends control signals through the Arduino that controls the opening and closing of an illustrative door connected to a servo motor."
              ghLink="https://github.com/FardinJim27/Automated-Door-Locking-System"
              demoLink="https://www.youtube.com/watch?v=n4QPUYcwRDk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Crop Analysis and Prediction"
              description="Using 'Machine Learning' for the detection and analysis of crops. This can allow crops to be grown at much higher precision, enabling farmers to treat plants and animals almost individually, which in turn significantly increases the effectiveness of farmers' decisions."
              ghLink="https://github.com/FardinJim27/Crop-Analysis-and-Prediction-using-Machine-Learning"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kitchen}
              isBlog={false}
              title="Isle's of Kitchen using MERN Stack"
              description="Isles of Kitchen is a web application designed to serve as a comprehensive platform for hosting multiple cloud kitchens. Here, we're attempting to help those who are passionate about doing something but are unable to do so due to a lack of opportunity."
              ghLink="https://github.com/FardinJim27/Isle-of-Kitchen-using-MERN"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
