import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'
import { eventsRef } from "./firebase"
import "./App.css";


const locales = {
    "pl": require("date-fns/locale/pl"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [];




export default function App() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);


    function saveEvent() {
        const item = {
            title: newEvent.title,
            start: newEvent.start,
            end: newEvent.end
        }
        eventsRef.push(item)
    }

    function handleAddEvent() {
        saveEvent();
        setAllEvents([...allEvents, newEvent]);
    }

    

    return (
        <div className="App">

            <fieldset className="add-event">
                <legend><button className="add-event-button" onClick={handleAddEvent}>
                    ADD NEW EVENT
                </button></legend>
                <div>
                    <input type="text" className="event-title" placeholder="Add Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} /> 
                </div>
                <DateTimePicker format="yyyy-MM-dd HH:mm" disableClock="true" value={newEvent.start} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DateTimePicker format="yyyy-MM-dd HH:mm" disableClock="true" value={newEvent.end} selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                
                
                
            </fieldset>
            <div className="calendar-container">
                <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
            </div>
        </div>
    );
}
