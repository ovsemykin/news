import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">
          <h3>Главная</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/news">Новости</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link href="/profile">Профиль</Nav.Link>
 {/*        <Nav.Link href="/login">Логин</Nav.Link> */}
        </Nav>
      </Navbar>
    );
  }
}
export default Header;
