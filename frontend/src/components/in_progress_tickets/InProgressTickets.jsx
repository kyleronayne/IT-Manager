import React, { Component } from 'react';
import TicketItem from "../ticket_item/TicketItem";
import "./InProgressTickets.css";

export class InProgressTickets extends Component {
    render() {
        return (
            <div className="InProgressTickets">
                <h2>My In Progress Tickets</h2>
                {this.props.tickets.map(ticket => {
                    if(ticket.status === "Claimed") {
                        return (
                            // "Component drilling" assign function to App.js
                            <TicketItem key={ ticket.id } ticket={ ticket } complete={this.props.complete} claim={ this.props.claim }></TicketItem>
                        )
                    }
                    return null
                })} 
            </div>
        )
    }
}

export default InProgressTickets
