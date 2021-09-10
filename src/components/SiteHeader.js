import { Link } from "react-router-dom";

export default function SiteHeader() {
    return (
        <header>
            <h2>EVENTS-TEST</h2>
            <p>admins page</p>
            <div><Link to="/admin/addEventHall">Add event hall</Link></div>
            <div><Link to="/admin/eventHallsList">Event Hall List</Link></div>
            <div><Link to="/admin/currentEvents">Current events</Link></div>
            <div><Link to="/admin/analytics">Analytics</Link></div>
            <p>users page</p>
            <div><Link to="/concerts">Concerts</Link></div>
        </header>
    )
}