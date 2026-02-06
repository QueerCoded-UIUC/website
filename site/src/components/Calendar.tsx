"use client";

import { useState } from "react";
import Colors from "@/utils/Colors";
import events from "@/utils/Events";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.updateLocale("en", { week: { dow: 0 } });
moment.locale("en");
const localizer = momentLocalizer(moment);

const allViews = Object.keys(Views).map((k) => Views[k as keyof typeof Views]);

export default function Cal() {
  function Event({ event }: { event: any }) {
    const start = moment(event.start);
    const end = moment(event.end);
    const timeRange = `${start.format("h:mm A")} - ${end.format("h:mm A")}`;

    return (
      <div>
        <div style={{ fontWeight: 600 }}>{event.title}</div>
        <div style={{ fontSize: 12 }}>{timeRange}</div>
      </div>
    );
  }
  const [showModal, setShowModal] = useState(false);
  const [calendarEvents, setCalendarEvents] = useState(events);

  return (
    <div style={{ padding: 20 }}>
      <div
        style={{
          height: 500,
          width: 900,
          borderRadius: 20,
          alignSelf: "center",
          justifySelf: "center",
          padding: 20,
          backgroundColor: Colors.QWhite,
        }}
      >
        <Calendar
          localizer={localizer}
          events={calendarEvents}
          step={10}
          views={allViews}
          defaultDate={new Date(Date.now())}
          popup={false}
          components={{ event: Event }}
          onShowMore={(events: typeof calendarEvents, date: Date) => {
            setShowModal(true);
            setCalendarEvents(events);
          }}
        />
      </div>
    </div>
  );
}
