import Dropdown from "react-bootstrap/Dropdown";

function MathTopics() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Mathematifcs
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Dropdown.Item>Sets</Dropdown.Item>
          <Dropdown.Item>Algebraic Expressions</Dropdown.Item>
          <Dropdown.Item>Fractions</Dropdown.Item>
          <Dropdown.Item>Mensuration</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default MathTopics;
