/*
 * @flow
 */
const actionsType = {
  ADD_NOTE: 'ADD_NOTE'
};

export type addNoteType = {
  type: 'ADD_NOTE',
  text: string
};

function addNote(text: string):addNoteType {
  return {
    type: actionsType.ADD_NOTE,
    text: text
  };
}

export {
  actionsType, addNote
};
