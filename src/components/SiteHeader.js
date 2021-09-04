import { Link } from "react-router-dom";

export default function SiteHeader() {
    return (
        <header>
            <span>EVENTS-TEST</span>
            <div><Link to="/admin/eventHallsList">Event Hall List</Link></div>
            <div><Link to="/admin/currentEvents">Current events</Link></div>
            <div><Link to="/admin/analytics">Analytics</Link></div>
        </header>
    )
}