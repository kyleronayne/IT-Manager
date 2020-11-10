import React, { Component } from 'react';
import './App.css';
import Tickets from './components/Tickets';

class App extends Component {
  state = {
    tickets: [
      {
        id: 1,
        owner: "Tina",
        summary: "Speaker Static",
        description: "",
        timestamp: "",
        priority: "",
        assignee: "Kyle",
        status: false
      },
      {
        id: 2,
        owner: "Roger",
        summary: "Create Disk Drive Spreadsheet",
        description: "",
        timestamp: "",
        priority: "",
        assignee: "Kyle",
        status: true
      }
    ]
  }
  
  render() {
    return (
      <div className="App">
        <Tickets tickets={this.state.tickets}></Tickets>
      </div>
    );
  }
}

export default App;
