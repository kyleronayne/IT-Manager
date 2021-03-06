/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "./TicketItem.css"

export class TicketItem extends Component {

    getStatusStyle = () => {
        // Un-Completed ticket
        if (this.props.ticket.status === "Unassigned") {
            return {
                color: "red"
            }
        }
        // Claimed and In Progress ticket
        else if (this.props.ticket.status === "Claimed"){
            return {
                color: "orange"
            }
        }
        // Completed ticket
        else {
            return {
                color: "green"
            }
        }
    }

    getTicketButtons = () => {
        // Object de-structuring
        const { id } = this.props.ticket;

        if (this.props.ticket.status === "Unassigned") {
            return (
                <button className="ClaimButton" onClick={ this.props.claim.bind(this, id) }>Claim</button>
            )
        }
        if (this.props.ticket.status === "Claimed") {
            return (
                <button className="ClaimButton" onClick={ this.props.claim.bind(this, id) }>Un-Claim</button>
            )
        }
    }

    assign = (e) => {
        console.log(this.props)
    }

    render() {
        return (
            <div className="TicketItem">
                {/* Received ticket from Ticekts component */}
                <h4 className="Summary" style={ this.getStatusStyle() }>{ this.props.ticket.summary }</h4>
                <p className="Info">By { this.props.ticket.owner }</p>
                <p className="Info">{ this.props.ticket.timestamp }</p>
                { this.getTicketButtons() }
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
