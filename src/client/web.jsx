import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';

const container = document.getElementById('container');
const appModule = './app/components/app.jsx';
import {store} from './app/store/store.js';

hotLoader(render)('你好');

/*
let unsubscribe = store.subscribe( () => {
  render(store.getState());
});
msg(unsubscribe);
*/

function render(txt='') {
  if (typeof txt != 'string') {
    txt = JSON.stringify(txt);
  }
  const App = require('./app/components/app.jsx').default;
  ReactDOM.render(
    <App context = { {store:store} }></App>, container
  );
}

function hotLoader(render) {
  return function(txt) {
    if (!module.hot) {
      render(txt);
    } else {
      hotRender(txt);
      module.hot.accept(appModule, () => {
        setTimeout(hotRender);
      });
    }
  };

  function hotRender(txt) {
    console.log(txt);
    try {
      render(txt);
    } catch (e) {
      ReactDOM.render(<RedBox error={e} />, container);
    }
  }
}
