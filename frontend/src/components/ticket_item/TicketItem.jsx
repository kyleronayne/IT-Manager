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
                <h4 className="Summary" style={ this.getStatusStyle() }>{ this.props.ticket.summary }</h4>
                <p className="Info">By { this.props.ticket.owner }</p>
                <p className="Info">{ this.props.ticket.timestamp }</p>
                <p className="Priority">Priority: { this.props.ticket.priority }</p>
            </div>
        )
    }
}

// PropTypes
TicketItem.propTypes = {
    ticket: PropTypes.object.isRequired
}

export default TicketItem
