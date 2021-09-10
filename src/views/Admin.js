import { Switch } from "react-router-dom"

import { AddEventHall,
    NewEvent,
    CurrentEvents,
    Analytics,
    EventHallsList,
    ChangeEvent } from "../components/AdminComponents"

export default function Admin() {
    return (
        <div>
            <h1>ADMIN</h1>
            <Switch>
                <EventHallsList path="/admin/eventHallsList" />
                <NewEvent path="/admin/newEvent" />
                <CurrentEvents path="/admin/currentEvents" link={"/admin/changeEvent"}/>
                <Analytics path="/admin/analytics" />
                <ChangeEvent path="/admin/changeEvent" />
                <AddEventHall path="/admin/addEventHall" />
            </Switch>
        </div>
    )
}