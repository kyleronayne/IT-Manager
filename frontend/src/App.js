import React, { Component } from 'react';
import './App.css';
import UnassignedTickets from './components/unassigned_tickets/UnassignedTickets';
import InProgressTickets from './components/in_progress_tickets/InProgressTickets';
import CompletedTickets from './components/completed_tickets/CompletedTickets';
import SideMenu from "./components/layout/side_menu/SideMenu";

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
        if (ticket.status === "Claimed") {
          ticket.status = "Unassigned"
          return ticket;
        }
        if (ticket.status === "Unassigned") {
          ticket.status = "Claimed"
          return ticket;
        }
        if (ticket.status === "Completed") {
          ticket.status = "Unassigned"
          return ticket;
        }
      }
      return ticket;
    }) });
  }

  complete = (id) => {
    this.setState({ tickets: this.state.tickets.map(ticket => {
      if (ticket.id === id) {
        if (ticket.status === "Unassigned" || ticket.status === "Claimed") {
          ticket.status = "Completed"
          return ticket;
        }
        if (ticket.status === "Completed") {
          ticket.status = "Claimed"
          return ticket
        }
      }
      return ticket;
    })})
  }

  
  render() {
    return (
      <div className="App">
        <SideMenu></SideMenu>
        <div className="TicketContainer">
          <UnassignedTickets tickets={ this.state.tickets } complete = { this.complete } claim={ this.claim }></UnassignedTickets>
          <InProgressTickets tickets={ this.state.tickets } complete = { this.complete } claim={ this.claim }></InProgressTickets>
          <CompletedTickets tickets={ this.state.tickets } complete = { this.complete } claim={ this.claim }></CompletedTickets>
        </div>
      </div>
    );
  }
}

export default App;
