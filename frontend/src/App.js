import React, { Component } from 'react';
import './App.css';
import UnassignedTickets from './components/unassigned_tickets/UnassignedTickets';
import InProgressTickets from './components/in_progress_tickets/InProgressTickets';

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
        assignee: "",
        status: "Unassigned"
      },
      {
        id: 2,
        owner: "Roger",
        summary: "Create Disk Drive Spreadsheet",
        description: "",
        timestamp: "11/10/2020 9:21 AM",
        priority: "Medium",
        assignee: "",
        status: "Unassigned"
      }
    ]
  }

  claim = (id) => {
    this.setState({ tickets: this.state.tickets.map(ticket => {
      if (ticket.id === id) {
        ticket.status = "In Progress"
        // TODO: Change assigne to the current user
      }
      return ticket;
    }) });
  }
  
  render() {
    return (
      <div className="App">
        <UnassignedTickets tickets={this.state.tickets} claim={ this.claim }></UnassignedTickets>
        <InProgressTickets></InProgressTickets>
      </div>
    );
  }
}

export default App;
