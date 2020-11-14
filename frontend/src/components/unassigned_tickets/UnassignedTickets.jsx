import React, { Component } from 'react';
import TicketItem from "../ticket_item/TicketItem";
import PropTypes from 'prop-types';
import "./UnassignedTickets.css"

class UnassignedTickets extends Component {


    render() {
        return (
            <div className="UnassignedTickets">
                <h2>Unassigned Tickets</h2>
                {this.props.tickets.map(ticket => {
                    if(ticket.status === "Unassigned") {
                        return (
                            // "Component drilling" claim function to App.js
                            <TicketItem key={ ticket.id } ticket={ ticket } claim={ this.props.claim }></TicketItem>
                        )
                    }
                    return null
                })} 
           </div>
       )
    }
}

// PropTypes
UnassignedTickets.propTypes = {
    tickets: PropTypes.array.isRequired
}

export default UnassignedTickets;