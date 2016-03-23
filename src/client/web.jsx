/**
 * @flow
 */
import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';

const container = document.getElementById('container');
const appModule = './app/app.jsx';

hotLoader(render)();

function render(){
  const App = require('./app/app.jsx').default;
  ReactDOM.render(
    <App msg = 'world'></App>, container
  );
}

function hotLoader(render){
  return function(){
    if(!module.hot){
      render();
    }else {
      hotRender();
      module.hot.accept(appModule,() => {
        setTimeout(hotRender);
      });
    }
  };

  function hotRender(){
    try {
      render();
    }catch(e) {
      ReactDOM.render(<RedBox error={e} />, container);
    }
  }
}
