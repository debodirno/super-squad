export const ADD_CHARACTER_TO_SQUAD = "ADD_CHARACTER_TO_SQUAD";
export const REMOVE_CHARACTER_FROM_SQUAD = "REMOVE_CHARACTER_FROM_SQUAD";
export const RESET_SQUAD = "RESET_SQUAD";

export const addCharacterToSquadById = id => {
  const action = {
    type: ADD_CHARACTER_TO_SQUAD,
    id
  };
  return action;
};

export const removeCharacterFromSquadById = id => {
  const action = {
    type: REMOVE_CHARACTER_FROM_SQUAD,
    id
  };
  return action;
};

export const resetSquad = () => ({ type: RESET_SQUAD });
