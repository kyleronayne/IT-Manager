import React, { Component } from 'react';
import './App.css';
import Tickets from './components/unassigned_tickets/Tickets';

class App extends Component {
  state = {
    tickets: [
      {
        id: 1,
        owner: "Tina",
        summary: "Speaker Static",
        description: "",
        timestamp: "11/10/2020 2:47 PM",
        priority: "Low",
        assignee: "Unassigned",
        status: false
      },
      {
        id: 2,
        owner: "Roger",
        summary: "Create Disk Drive Spreadsheet",
        description: "",
        timestamp: "11/10/2020 9:21 AM",
        priority: "Medium",
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
