import ProgressBar from "react-bootstrap/ProgressBar";
import "./challengeProgress.css";

function ChallengeProgress() {
  let win = 50;
  let draw = 40;
  let loss = 60;
  const total = win + draw + loss;
  return (
    <div>
      <h3>Challenges Taken = {total}</h3>
      <ProgressBar>
        <ProgressBar variant="success" now={win} label={win}></ProgressBar>
        <ProgressBar
          variant="secondary"
          min={0}
          now={draw}
          label={draw}
        ></ProgressBar>
        <ProgressBar
          variant="danger"
          min={0}
          now={loss}
          label={loss}
        ></ProgressBar>
      </ProgressBar>
    </div>
  );
}

export default ChallengeProgress;
