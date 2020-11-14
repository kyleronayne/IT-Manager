import React, { Component } from 'react';
import TicketItem from "../ticket_item/TicketItem";
import "./CompletedTickets.css";

export class InProgressTickets extends Component {
    render() {
        return (
            <div className="CompletedTickets">
                <h2>My Completed Tickets</h2>
                {this.props.tickets.map(ticket => {
                    if(ticket.status === "Completed") {
                        return (
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
