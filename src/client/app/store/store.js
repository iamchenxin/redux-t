
//import {noteRD} from '../reducers/noterd.js';
const noteRD = require('../reducers/noterd.js').noteRD;
const createStore = require('redux').createStore;
//import { createStore } from 'redux';

let store = createStore(noteRD);

function msg(callback) {
  setTimeout( () => {
    store.dispatch({type: 'ADD_NOTE', text:'haha'});
    setTimeout( () => {
      store.dispatch({type: 'ADD_NOTE', text:'的哈'});
      setTimeout( () => {
        store.dispatch({type: 'ADD_NOTE', text:'jack！，tom.'});
        callback();
      }, 1000);
    }, 1000);
  }, 1000);

}

export {
  store,
  msg
};
