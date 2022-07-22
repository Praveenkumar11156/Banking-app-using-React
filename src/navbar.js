import { Navbar, Container, Nav } from "react-bootstrap";
import "./styles.css";

export default function NavBar() {
  return (
    <>
      <Navbar class="navbar navbar-custom">
        <Container class="navba">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="navbar-brand"
                activeClassName="navbar-brand--active"
                href="#/Home"
                title=" Home Page"
              >
                {" "}
                Home{" "}
              </Nav.Link>
              <Nav.Link
                className="navbar-brand"
                title="Create your Account"
                href="#/CreateAccount/"
              >
                {" "}
                CreateAccount{" "}
              </Nav.Link>
              <Nav.Link
                className="navbar-brand"
                title="Deposit in your Account"
                href="#/Deposit/"
              >
                Deposit{" "}
              </Nav.Link>
              <Nav.Link
                className="navbar-brand"
                title="Withdraw from your Account"
                href="#/Withdraw/"
              >
                WithDraw{" "}
              </Nav.Link>
              <Nav.Link
                className="navbar-brand"
                title="Track your Transactions"
                href="#/AllData/"
              >
                All Data
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div style={{  
  backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>

      </div> */}
    </>
  );
}
