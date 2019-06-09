import React, { Component } from "react";
// import "../styles/index.css";
import "./index.css";
import CharacterList from "./CharacterList";
import HeroList from "./HeroList";
import SquadStats from "./SquadStats";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-name-header">
          <h1>SuperSquad</h1>
        </div>
        <div className="app-container row">
          <div className="col-md-4">
            <CharacterList />
          </div>
          <div className="col-md-4">
            <HeroList />
          </div>
          <div className="col-md-4">
            <SquadStats />
          </div>
        </div>
      </div>
    );
  }
}
