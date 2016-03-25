import React from 'react';
import NoteList from './notelist.jsx';

class TestCm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.context.store.subscribe(() => {
      const store = this.context.store;
      this.setState(store.getState());
    });
  }

  render() {
    const listStyle = {
      listStyleType: 'square',
      color: 'Orange'
    };
    const liStyle = {
      fontSize: 38,
      color: 'Gray'
    };

    console.log('this.state.noteRD');
    console.dir(this.state);
    const fontsize = MakeRandomNumber(10, 38);
    const data = {
      notelist: [],
      style: {
        listStyleType: 'square',
        color: 'Orange'
      }
    };
    if(this.state.noteRD) {
      const notelist =  this.state.noteRD.map( data => {
        return {
          note: data.text,
          style: {
            fontSize: fontsize(),
            color: 'Orange'
          }
        };
      });
      data.notelist = notelist;
    }

    console.log(this.state);
    return (
      <div>
        <p> i am testcm</p>
        <NoteList {...data}/>
      </div>
    );
  }
}
TestCm.contextTypes = { store: React.PropTypes.object};

function MakeRandomNumber(min, max) {
  return function() {
    const rt = (Math.random()*(max-min)+min);
    return parseInt(rt, 10);
  };
}

export default TestCm;
