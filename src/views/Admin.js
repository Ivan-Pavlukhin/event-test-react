import { Switch } from "react-router-dom"

import { NewEvent } from "../components/AdminComponents"
import { CurrentEvents } from "../components/AdminComponents"
import { Analytics } from "../components/AdminComponents"
import {EventHallsList} from "../components/AdminComponents"

export default function Admin() {
    return (
        <div>
            <h1>ADMIN</h1>
            <Switch>
                <EventHallsList path="/admin/eventHallsList" />
                <NewEvent path="/admin/newEvent" />
                <CurrentEvents path="/admin/currentEvents"/>
                <Analytics path="/admin/analytics" />
            </Switch>
        </div>
    )
}