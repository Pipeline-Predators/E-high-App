import Accordion from "react-bootstrap/Accordion";
import EnglishTopics from "./subjectDropDowns/EnglishTopics";
import MathTopics from "./subjectDropDowns/MathTopics";
import ScienceTopics from "./subjectDropDowns/ScienceTopics";
import SocialTopics from "./subjectDropDowns/SocialTopics";

function CollapsingAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Review Past Questions</Accordion.Header>

        <Accordion.Body>
          {/* The Lists of the various subjects */}
          <EnglishTopics />
          <ScienceTopics />
          <SocialTopics />
          <MathTopics />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CollapsingAccordion;
