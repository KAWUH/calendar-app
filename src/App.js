import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'
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
    return (
        <div className="App">

            <fieldset className="add-event">
                <legend><button className="add-event-button">
                    ADD NEW EVENT
                </button></legend>
                <div>
                    <input type="text" className="event-title" placeholder="Add Title"  />
                </div>
                <DateTimePicker id="datepicker" format="yyyy-MM-dd HH:mm"  />
                <DateTimePicker id="datepicker" format="yyyy-MM-dd HH:mm"  />
                
                
            </fieldset>
            <div className="calendar-container">
                <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
            </div>
        </div>
    );
}
