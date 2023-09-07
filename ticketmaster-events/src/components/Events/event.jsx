import EventsItem from "./components/EventsItem/item";
import eventsJSON from "../../data/events.json";
import { useState } from "react";
// console.log(data)

const Events = ({ searchValue }) => {
  const [data] = useState(eventsJSON)
  const {_embedded: {events}} = data
  // const events = data._embedded.events;
  // console.log(events)
  const handleEventItemClick = (id) => {
    console.log("clickeandooo", id);
  };

  const renderEvents = () => {
    let eventFilter = events;

    if (searchValue.length > 0) {
      eventFilter = eventFilter.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchValue)
      );
    }
    return eventFilter.map((prop) => (
      <EventsItem
        key={`${prop.id}`}
        name={prop.name}
        info={prop.info}
        images={prop.images[0].url}
        onEventClick={handleEventItemClick}
        id={prop.id}
      />
    ));
  };
  // console.log(eventsComponent)

  return (
    <div>
      Eventos
      {renderEvents()}
    </div>
  );
};

export default Events;
