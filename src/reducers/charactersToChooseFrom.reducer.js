import { ADD_CHARACTER_TO_SQUAD, REMOVE_CHARACTER_FROM_SQUAD, RESET_SQUAD } from "../actions/index";
import * as Constants from "../constants";
import characters_json from "../data/characters.json";
import { addHeroToSquad } from "./utils";

const charactersToChooseFrom = (state = characters_json, action) => {
  const numberOfTotalCharacters = characters_json.length;
  switch (action.type) {
    case ADD_CHARACTER_TO_SQUAD:
      if (numberOfTotalCharacters - state.length >= Constants.MAX_HEROES_PER_SQUAD) {
        alert(`Cannot include more than ${Constants.MAX_HEROES_PER_SQUAD} heros in your squad`);
        return state;
      }
      const remainingCharacters = state.filter(character => character.id !== action.id);
      return remainingCharacters;
    case REMOVE_CHARACTER_FROM_SQUAD:
      const charactersAfterAddition = [...state, addHeroToSquad(characters_json, action.id)];
      return charactersAfterAddition;
    case RESET_SQUAD:
      return characters_json;
    default:
      return state;
  }
};

export default charactersToChooseFrom;
