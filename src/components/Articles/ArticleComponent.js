import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const ArticleComponent = ({ cardImage, title, url }) => {
  const history = useHistory();

  return (
    <article>
      <div className="d-none d-lg-flex w-75 align-items-center mb-5">
        <img src={cardImage} alt="cardimage" />
        <div className="d-flex flex-column mx-4">
          <h3>{title}</h3>
          <p>
            Answer timed randomly selected questions on your preferred high school subject. All questions carry equal marks, and you have a minute per question.
            (ie 5 questions is equivalent to 5 minutes)
          </p>
          <Button className="w-25" onClick={() => history.push(url)}>
            Let's Begin
          </Button>
        </div>
      </div>

      <div className="d-lg-none d-sm-flex flex-column w-75 align-items-center mb-5">
        <img src={cardImage} alt="cardimage" />
        <div className="d-flex flex-column my-3">
          <h3>{title}</h3>
          <p>
            You are allowed to solve the questions at your own pace(NOT TIMED)
            and can also view answers before the next question.
          </p>
          <Button className="w-75" onClick={() => history.push(url)}>
            Let's Begin
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ArticleComponent;
