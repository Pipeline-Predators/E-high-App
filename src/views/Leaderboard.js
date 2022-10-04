import React from "react";
import { getTakeChallenge } from "../services/QuizService";
import { useSelector, useDispatch } from "react-redux";

function Leaderboard() {
  const studentDetails = useSelector((state) => state.student.studentDetails);

  //const
  return <div>Hello world</div>;
}
