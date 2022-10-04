import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, CardText, CardTitle } from "reactstrap";

const ReviewSubjectCards = ({ title, description }) => {
  const history = useHistory();
  return (
    <Card body className="my-5 subject-card">
      <CardTitle tag="h2">{title}</CardTitle>
      <CardText>{description}</CardText>
      <Button color="primary mb-3 ">Begin</Button>
    </Card>
  );
};

export default ReviewSubjectCards;
