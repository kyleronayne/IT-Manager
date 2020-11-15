import React from 'react';
import "./SideMenu.css"

export default function SideMenu() {
    return (
        <div className="SideMenu">
            <span className="SideMenuLink" href="#">Ticket Dashboard</span>
            <span className="SideMenuLink" href="#">My Tickets</span>
        </div>
    )
}