import Dropdown from "react-bootstrap/Dropdown";

function ScienceTopics() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Integrated Science
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Dropdown.Item>Elements</Dropdown.Item>
          <Dropdown.Item>Cells</Dropdown.Item>
          <Dropdown.Item>Matter</Dropdown.Item>
          <Dropdown.Item>Living and Non Living Things</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default ScienceTopics;
