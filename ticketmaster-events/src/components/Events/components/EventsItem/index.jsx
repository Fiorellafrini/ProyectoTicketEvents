const EventsItem = ({ info, name, images }) => {
  return (
    <div>
      <img src={images} alt={name} width={200} height={200}></img>
      <h4>{name}</h4>
      <p>{info}</p>
    </div>
  );
};

export default EventsItem;
