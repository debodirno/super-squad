import { combineReducers } from "redux";
import charactersToChooseFrom from "./charactersToChooseFrom.reducer";
import heroesAddedToSquad from "./heroesAddedToSquad.reducer";

const rootReducer = combineReducers({ charactersToChooseFrom, heroesAddedToSquad });

export default rootReducer;
