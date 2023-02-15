import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhinay Singh </span>
            from <span className="purple"> Bareilly, India.</span>
            <br />I am pursuing B.tech in Computer Science in SRMSCET&R,
            Bareilly.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make it work, make it right, make it fast"{" "}
          </p>
          <footer className="blockquote-footer">Abhinay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
