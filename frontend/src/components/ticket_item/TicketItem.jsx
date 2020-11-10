/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "./TicketItem.css"

export class TicketItem extends Component {

    getStatusStyle = () => {
        // Completed ticket
        if (this.props.ticket.status) {
            return {
                color: "green"
            }
        }
        // Un-Completed ticket
        else {
            return {
                color: "red"
            }
        }
    }

    render() {
        return (
            <div className="TicketItem">
                {/* Received ticket from Ticekts component */}
                <div style={ this.getStatusStyle() }>{ this.props.ticket.summary }</div>
                <p className="Timestamp">{ this.props.ticket.timestamp }</p>
                <sub>Assigned To: { this.props.ticket.assignee }</sub> 
            </div>
        )
    }
}

// PropTypes
TicketItem.propTypes = {
    ticket: PropTypes.object.isRequired
}

export default TicketItem
