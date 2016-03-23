import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';

const container = document.getElementById('container');
const appModule = './app/app.jsx';
import {store, msg} from './app/store/store.js';

hotLoader(render)('你好');

let unsubscribe = store.subscribe( () => {
  render(store.getState());
});
msg(unsubscribe);

function render(txt='') {
  if (typeof txt != 'string') {
    txt = JSON.stringify(txt);
  }
  const App = require('./app/app.jsx').default;
  ReactDOM.render(
    <App msg = {txt}></App>, container
  );
}

function hotLoader(render) {
  return function() {
    if (!module.hot) {
      render();
    } else {
      hotRender();
      module.hot.accept(appModule, () => {
        setTimeout(hotRender);
      });
    }
  };

  function hotRender(txt) {
    try {
      render(txt);
    } catch (e) {
      ReactDOM.render(<RedBox error={e} />, container);
    }
  }
}
