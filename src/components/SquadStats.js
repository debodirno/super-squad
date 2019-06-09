import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { resetSquad } from "../actions/index";

class SquadStats extends Component {
  squadStrength = () => {
    return this.props.heroes.reduce((accumulator, hero) => accumulator + hero.strength, 0);
  };

  squadIntelligence = () => {
    return this.props.heroes.reduce((accumulator, hero) => accumulator + hero.intelligence, 0);
  };

  squadSpeed = () => {
    return this.props.heroes.reduce((accumulator, hero) => accumulator + hero.speed, 0);
  };

  render() {
    return (
      <div className="squad-stats-container">
        <div className="squad-stats-header">
          <div>
            <h4>Squad Stats</h4>
          </div>
        </div>
        <div className="squad-stats-list">
          <ul className="list-group">
            <li className="list-group-item">
              <b>Overall Strength:</b> {this.squadStrength()}
            </li>
            <li className="list-group-item">
              <b>Overall Intelligence:</b> {this.squadIntelligence()}
            </li>
            <li className="list-group-item">
              <b>Overall Speed:</b> {this.squadSpeed()}
            </li>
          </ul>
        </div>
        <button className="btn btn-dark reset-squad" onClick={() => this.props.resetSquad()}>
          Reset Squad
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ characters: state.charactersToChooseFrom, heroes: state.heroesAddedToSquad });

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ resetSquad }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SquadStats);
