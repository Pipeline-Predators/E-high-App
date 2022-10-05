import { backgroundColors } from "contexts/BackgroundColorContext";
import Card from "react-bootstrap/Card";
import { Tips } from "./Tips";

function About() {
  return (
    <div className="about">
      <Card className="cards">
        <Card.Body>
          <Card.Title>
            <h3>{Tips[0].title}</h3>
          </Card.Title>

          <Card.Text>{Tips[0].body}</Card.Text>
        </Card.Body>
      </Card>
      <Card className="cards">
        <Card.Body>
          <Card.Title>
            <h3>{Tips[1].title}</h3>
          </Card.Title>

          <Card.Text>{Tips[1].body}</Card.Text>
        </Card.Body>
      </Card>
      <Card className="cards">
        <Card.Body>
          <Card.Title>
            <h3>{Tips[2].title}</h3>
          </Card.Title>

          <Card.Text>{Tips[2].body}</Card.Text>
        </Card.Body>
      </Card>
      <Card className="cards">
        <Card.Body>
          <Card.Title>
            <h3>{Tips[3].title}</h3>
          </Card.Title>

          <Card.Text>{Tips[3].body}</Card.Text>
        </Card.Body>
      </Card>
     
    </div>
  );
}

export default About;
