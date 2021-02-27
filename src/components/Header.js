import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const styles = {
  jumbotron: {
    background: "#C0CFBA",
    height: "250px",
    marginBottom: "30px",
    color: "#E89B42",
  },
};

export default function TheJumbotron() {
  return (
    <Jumbotron
      className="justify-content-center text-center"
      style={styles.jumbotron}
    >
      <Container>
        <h1>Employee Directory</h1>
        <p>Sort through emplyees</p>
      </Container>
    </Jumbotron>
  );
}