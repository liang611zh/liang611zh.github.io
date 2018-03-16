import React, { Component } from 'react';
import './App.css';
import LeftSide from './components/left-side';
import RightSide from './components/right-side';
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="cf">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    );
  }
}

export default App;
