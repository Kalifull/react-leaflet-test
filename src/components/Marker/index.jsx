import { Marker as MarkerLeaflet, Popup } from 'react-leaflet';

const Marker = ({ position, text }) => {
  return (
    position && (
      <MarkerLeaflet position={position}>
        <Popup>{text}</Popup>
      </MarkerLeaflet>
    )
  );
};

export default Marker;
