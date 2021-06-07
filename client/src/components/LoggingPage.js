import React, { Component } from "react";
import { Row, Form, Button } from "react-bootstrap";

export default class LoggingPage extends Component {
  state = {
    username: "",
    password: "",
  };

  onInputChange = (e) => this.setState({ [e.target.name]: e.target.value });

  loginCheck = (name, pass) => {
    name = this.state.username;
    pass = this.state.password;

    if (name === "Admin" && pass === "12345") {
      localStorage.login = true;
    } else {
      localStorage.login = false;
      alert("В логине или пароле ошибка");
    }
  };

  onSubmit = () => {
    localStorage.username = this.state.username;
    localStorage.password = this.state.password;

    console.log("username: " + localStorage.username);
    console.log("password: " + localStorage.password);
    this.loginCheck();
    window.location.reload()
  };

  render() {
    return (
      <Row className="justify-content-md-center">
        <Form>
          <Form.Group>
            <Form.Control
              placeholder="Логин"
              value={this.state.username}
              name="username"
              onChange={this.onInputChange}
              type="text"
            />
            <Form.Text className="text-muted">Ожидается: Admin</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              placeholder="Пароль"
              value={this.state.password}
              name="password"
              onChange={this.onInputChange}
              type="text"
            />
            <Form.Text className="text-muted">Ожидается: 12345</Form.Text>
          </Form.Group>
          <Form.Group>
            <div className="text-right">
              <Button variant="primary" onClick={this.onSubmit}>
                Войти
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Row>
    );
  }
}
