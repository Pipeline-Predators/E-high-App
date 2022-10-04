import React from "react";

const About = () => {
  return (
    <article>
      <div>
        <h4>E-High Application. </h4>
        <p>
          This application is to help students in the secondary level of their
          education to prepare enough for their West African Examination Council
          (WAEC) papers.
        </p>
      </div>
      <div>
        <h4>The Take Quiz Button.</h4>
        <p>
          On click, you are allowed to take a time based quiz where the time is
          based on the number of questions you select. You are allowed to select
          the number of questions in multiples of 5 ranging between 20 and 40.
          The available subjects to take quiz on is;
          <ul>
            <li>English</li>
            <li>Mathematics</li>
            <li>Elective Mathematics</li>
            <li>Social Studies</li>
            <li>Integrated Science</li>
            <li>Chemistry</li>
            <li>Boilogy</li>
            <li>Physics</li>
          </ul>
        </p>
      </div>
      <div>
        <h4>Review Past Questions Button.</h4>
        <p>
          Answer questions from previous years of the WAEC papers. They are
          yearly list for all the Subject{" "}
        </p>
      </div>
      <div>
        <h4>The Take Challenge Button .</h4>
        <p>
          Challenge yourself by answering randomly selected by the database on
          the above listed Subjects. You are not timed here.
        </p>
      </div>
    </article>
  );
};

export default About;
