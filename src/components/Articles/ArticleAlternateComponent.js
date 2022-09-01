import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const ArticleAlternateComponent = ({ cardImage, title, url }) => {
  const history = useHistory();

  return (
    <article>
      <div className="d-none d-lg-flex w-75 align-items-center">
        <div className="d-flex flex-column mx-4">
          <h3>{title}</h3>
          <p>
            You are allowed to solve the questions at your own pace(NOT TIMED)
            and can also view answers before the next question.
          </p>
          <Button className="w-25" onClick={() => history.push(url)}>
            Let's Begin
          </Button>
        </div>
        <img src={cardImage} alt="cardimage" />
      </div>
      <div className="d-lg-none d-sm-flex flex-column w-75 align-items-center">
        <img src={cardImage} alt="cardimage" />
        <div className="d-flex flex-column my-3">
          <h3>{title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            corporis omnis, voluptatem eius nostrum asperiores voluptates veniam
            quod porro tempora.
          </p>
          <Button className="w-75" onClick={() => history.push(url)}>
            Let's Begin
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ArticleAlternateComponent;