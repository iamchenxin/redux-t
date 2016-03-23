/*
 * @flow
 */
import {actionsType } from '../actions/addnote.js';
import type {addNoteType} from '../actions/addnote.js';

type nodeType = {
  text:string
};

function noteRD(state:Array<nodeType> = [], action:addNoteType):Array<nodeType> {
  switch (action.type) {
  case actionsType.ADD_NOTE:
    return [...state, {
      text:action.text
    }];
  default:
    return state;
  }
}

export {noteRD};
