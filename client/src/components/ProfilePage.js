import React from "react";
import { Form, Button } from "react-bootstrap";

class ProfilePage extends React.Component {
  onlogOut = () => {
    delete localStorage.username;
    delete localStorage.password;
    localStorage.login = false;

    console.log("username: " + localStorage.usernam);
    console.log("password: " + localStorage.password);
    window.location.reload()
  };

  render() {
    return (
      <div>
        <h1>Профиль</h1>
        <h3>Логин: {localStorage.username}</h3>
        <h3>Пароль: {localStorage.password}</h3>

        <Form.Group>
          <div className="text-right">
            <Button variant="primary" onClick={this.onlogOut}>
              Выйти
            </Button>
          </div>
        </Form.Group>
      </div>
    );
  }
}

export default ProfilePage;
