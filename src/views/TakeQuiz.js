import TakeQuizCard from "components/TakeQuizCards/TakeQuizCard";
import TakeQuizRules from "components/TakeQuizCards/TakeQuizRules";
import React from "react";

const TakeQuiz = () => {
  const [body, setBody] = React.useState(
    <TakeQuizRules handleClick={() => setBody(() => <TakeQuizCard />)} />
  );
  return <article>{body}</article>;
};

export default TakeQuiz;
