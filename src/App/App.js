import React, { Component } from 'react';
import './App.css';
import Member from '../components/Member/Member';
import Group from '../components/Group/Group';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Group />
        <Member />
      </div>
    );
  }
}

export default App;
