import { ADD_CHARACTER_TO_SQUAD, REMOVE_CHARACTER_FROM_SQUAD, RESET_SQUAD } from "../actions/index";
import * as Constants from "../constants";
import characters_json from "../data/characters.json";
import { addHeroToSquad } from "./utils";

const heroesAddedToSquad = (state = [], action) => {
  switch (action.type) {
    case ADD_CHARACTER_TO_SQUAD:
      if (state.length >= Constants.MAX_HEROES_PER_SQUAD) {
        return state;
      }
      const heroesAddedToSquad = [...state, addHeroToSquad(characters_json, action.id)];
      return heroesAddedToSquad;
    case REMOVE_CHARACTER_FROM_SQUAD:
      const remainingHeroes = state.filter(hero => hero.id !== action.id);
      return remainingHeroes;
    case RESET_SQUAD:
      return [];
    default:
      return state;
  }
};

export default heroesAddedToSquad;
