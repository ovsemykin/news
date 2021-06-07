import React from "react";
import { Counter } from '../features/counter/Counter';
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Главная страница</h1>
        <Counter />


      </div>
    );
  }
}

export default HomePage;
