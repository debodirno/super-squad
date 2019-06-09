import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCharacterFromSquadById } from "../actions/index";
import * as Constants from "../constants";

class HeroList extends Component {
  render() {
    return (
      <div className="hero-squad-container">
        <div className="hero-squad-header">
          <div>
            <h4>Your Hero Squad {`(Max ${Constants.MAX_HEROES_PER_SQUAD} Heroes)`}</h4>
          </div>
        </div>
        <div className="hero-squad-list">
          <ul className="list-group">
            {this.props.heroes.map(hero => (
              <li key={hero.id} className="list-group-item">
                <div className="list-item">{hero.name}</div>
                <div className="list-item right" onClick={() => this.props.removeCharacterFromSquadById(hero.id)}>
                  -
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ heroes: state.heroesAddedToSquad });

export default connect(
  mapStateToProps,
  { removeCharacterFromSquadById }
)(HeroList);
