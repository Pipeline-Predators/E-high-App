import Dropdown from "react-bootstrap/Dropdown";

function EnglishTopics() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          English Language
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Dropdown.Item>Question Tags</Dropdown.Item>
          <Dropdown.Item>Synonyms</Dropdown.Item>
          <Dropdown.Item>Antonyms</Dropdown.Item>
          <Dropdown.Item>Idioms</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default EnglishTopics;
