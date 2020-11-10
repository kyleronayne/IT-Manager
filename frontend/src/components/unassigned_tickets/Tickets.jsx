import React, { Component } from 'react';
import TicketItem from "../ticket_item/TicketItem";
import PropTypes from 'prop-types';

class Tickets extends Component {
    render() {
       return this.props.tickets.map((ticket) => (
        // Passing a ticket to the Tickets component
        <TicketItem key={ ticket.id } ticket={ ticket }></TicketItem>
       ));
    }
}

// PropTypes
Tickets.propTypes = {
    tickets: PropTypes.array.isRequired
}

export default Tickets;