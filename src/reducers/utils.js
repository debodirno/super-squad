export const addHeroToSquad = (characters_json, id) => {
  return characters_json.find(character => character.id === id);
};
