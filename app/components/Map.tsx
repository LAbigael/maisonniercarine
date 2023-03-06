import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Where = () => {
  // const [viewport, setViewport] = useState({
  //   width: 1000,
  //   height: 400,
  //   latitude: ,
  //   longitude: ,
  //   zoom: 8,
  // });
  return (
    <iframe
      src="https://www.google.com/maps/d/u/0/embed?mid=1-bHFYLQB4z9f_rWAZiLxLRlNNReYgwE&ehbc=2E312F"
      width="1000"
      height="480"
    ></iframe>
  );
};

export default Where;
