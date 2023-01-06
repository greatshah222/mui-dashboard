import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from "../components/Header";
import { formatDate } from "@fullcalendar/core";
import useMediaQuery from "@mui/material/useMediaQuery";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        console.log("selected", selected);
        const title = prompt("Please enter a new title for your event ");

        const calendarApi = selected.view.calendar;
        console.log("calendarApi", calendarApi);
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.startStr}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = () => {
        if (window.confirm("Are you sure u want to delete")) {
            selected.event.remove();
        }
    };
    return (
        <Box m="20px">
            <Header title="CALENDAR" subTitle="See all your events here" />

            <Box display={"flex"} justifyContent="space-between" flexDirection={isNonMobile ? "row" : "column-reverse"}>
                {/* CALENDAR SIDEBAR */}

                <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius={"4px"}>
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((el) => (
                            <ListItem
                                key={el.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin: "10px 0",
                                    borderRadius: "2px",
                                }}
                            >
                                {/* format date given by npm package */}
                                <ListItemText
                                    primary={el.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(el.start, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>{" "}
                </Box>

                {/* CAlendar */}

                <Box
                    flex="1 1 100%"
                    ml={isNonMobile ? "15px" : "0px"}
                    sx={{
                        "& .fc-toolbar": {
                            flexDirection: isNonMobile ? "row" : "column-reverse",
                            gap: "10px",
                        },
                    }}
                >
                    <FullCalendar
                        height={"75vh"}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            // dont have space here below
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            {
                                id: "1234",
                                title: "Devops meeting",
                                date: "2023-01-13",
                            },
                            {
                                id: "12345",
                                title: "Studio meeting",
                                date: "2023-01-29",
                            },
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Calendar;
