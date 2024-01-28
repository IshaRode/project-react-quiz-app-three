import { Component } from "react";
import { NavLink } from "react-router-dom";

export default class HomeComponent extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <h1 className="Quiz">Quiz App</h1>
        </div>

        <div>
          <NavLink to="/Quiz">
            <button className="play">Play</button>
          </NavLink>
        </div>
      </div>
    );
  }
}
