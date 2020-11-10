import React, { Component } from 'react';
import './App.css';
import Tickets from './components/Tickets';

class App extends Component {
  state = {
    tickets: [
      {
        id: 1,
        owner: "Tom",
        summary: "Remove HDD from PC 2",
        description: "",
        timestamp: "",
        priority: "",
        assignee: "",
        status: false
      },
      {
        id: 2,
        owner: "Roger",
        summary: "Create Disk Drive Spreadsheet",
        description: "",
        timestamp: "",
        priority: "",
        assignee: "",
        status: false
      }
    ]
  }
  
  render() {
    return (
      <div className="App">
        <Tickets></Tickets>
      </div>
    );
  }
}

export default App;
