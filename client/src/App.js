import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import AppСontent from "./components/AppСontent";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AppСontent />
      </div>
    );
  }
}

export default App;
