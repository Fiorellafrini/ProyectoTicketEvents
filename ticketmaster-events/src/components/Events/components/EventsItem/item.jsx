const EventsItem = ({ info, id, name, images, onEventClick }) => {
  
  const handleStopClick = (event) => {
    event.stopPropagation() //para que no se ejecuten los dos onclick cuando aprieto uno solo.
    onEventClick(id)
  }
  
  return (
    <div onClick={() => console.log("padre click")}>
      <img src={images} alt={name} width={200} height={200}></img>
      <h4>{name}</h4>
      <p>{info}</p>
      <button
        onClick={handleStopClick}
      >
        Ver mas
      </button>
    </div>
  );
};

export default EventsItem;
