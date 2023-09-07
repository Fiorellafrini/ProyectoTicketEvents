import EventsItem from "./components/EventsItem/index.jsx";
import data from "../../data/events.json";
// console.log(data)

const events = data._embedded.events;
// console.log(events)

const handleEventItemClick=(id)=>{
    console.log("clickeandooo",id)
}


const Events = () => {
  const eventsComponent = events.map((prop) => (
    <EventsItem
      key={`${prop.id}`}
      name={prop.name}
      info={prop.info}
      images={prop.images[0].url}
      onEventClick={handleEventItemClick}
      id={prop.id}
    />
  ));
  // console.log(eventsComponent)

  return (
    <div>
      Eventos
      {eventsComponent}
    </div>
  );
};

export default Events;
