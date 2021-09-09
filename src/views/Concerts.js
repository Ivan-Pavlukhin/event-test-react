import {CurrentEvents} from '../components/AdminComponents'

export default function Concerts() {
    return (
        <>
        <h1>Our concerts</h1>
        
        <CurrentEvents link={"/buyTickets"}/>
        </>
    )
}