import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCharacterToSquadById } from "../actions/index";

class CharacterList extends Component {
  render() {
    return (
      <div className="characters-container">
        <div className="characters-header">
          <div>
            <h4>Characters</h4>
          </div>
        </div>
        <div className="characters-list">
          <ul className="list-group">
            {this.props.characters.map(character => (
              <li key={character.id} className="list-group-item">
                <div className="list-item">{character.name}</div>
                <div className="list-item right" onClick={() => this.props.addCharacterToSquadById(character.id)}>
                  +
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ characters: state.charactersToChooseFrom });

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addCharacterToSquadById }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);
