import ChallengeCard from "components/ChallengeCard/ChallengeCard";
import React, {useState} from "react";
import TakeChallengeRules from "components/ChallengeCard/TakeChallengeRules";


const TakeChallenge = () => {
  const [body, setBody] = useState(
    <TakeChallengeRules handleClick={() => setBody(() => <ChallengeCard />)} />
  );
  return <article>{body}</article>;
};

export default TakeChallenge;
