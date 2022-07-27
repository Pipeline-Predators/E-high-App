import Dropdown from "react-bootstrap/Dropdown";

function SocialTopics() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Social Studies
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Dropdown.Item>Adolescent Reproductive Health</Dropdown.Item>
          <Dropdown.Item>Culture</Dropdown.Item>
          <Dropdown.Item>Self Reliance</Dropdown.Item>
          <Dropdown.Item>Democracy</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default SocialTopics;
