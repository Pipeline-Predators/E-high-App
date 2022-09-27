import axios from "axios";

// const host = 'http://localhost:8080'
//const host = 'http://pipelinepredatorseb-env.eba-8fpya2g3.us-east-1.elasticbeanstalk.com'

// const host = "localhost:8080";  //"https://backend.pipelinepredators.com";

const host = "https://backend.pipelinepredators.com";

/**
 * It returns a promise that resolves to the response of an HTTP request to the URL
 * `/quiz/api/fetch_subjects`
 * @returns An object with a data property that contains the array of subjects.
 */

/* This returns an object form containing the following key value pairs
[
  {
  id: 1
  name: English
  description: Describing how the subject is about
},
 {
  id: 2
  name: Mathematics
  description: Describing how the subject is about
},
]
*/
export const getSubjects = async () => {
  const subjects = axios.get(`${host}/takequiz/api/fetch_subjects`);
  return (await subjects).data;
};

/**
 * It fetches a quiz from the server and returns the data.
 * @returns An array of objects.
 */

export const getTakeQuizzes = async ({ subjectId, questionNumber }) => {
  const quizzes = axios.get(`${host}/takequiz/api/fetch_quiz`, {
    params: {
      subjectId: subjectId,
      questionNumber: questionNumber,
    },
  });
  return (await quizzes).data;
};

export const saveTakeQuizResults = async ({
  studentToken,
  currentScore,
  questionNumber,
  subjectId,
}) => {
  const payload = {
    studentToken: studentToken,
    currentScore: currentScore,
    quizTotal: questionNumber,
    subjectId: subjectId,
  };
  const results = axios.post(`${host}/takequiz/api/save_results`, payload);
  return (await results).data;
};
