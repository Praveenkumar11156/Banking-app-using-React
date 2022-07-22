import { Card } from "react-bootstrap";
import Bank from "./bank.png";

export default function Home() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Bank} />
        <Card.Body>
          <Card.Title>BadBank Home</Card.Title>
          <Card.Text>
            Welcome to the bank. You can move around using the navigation bar.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
