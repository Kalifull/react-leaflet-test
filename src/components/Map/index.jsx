import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Popup, Polyline } from 'react-leaflet';
import { useSelector } from 'react-redux';

import Bound from '../Bound';
import Marker from '../Marker';

import { selectRoute } from '../../store/reducers/router/selectors';

const Map = ({ center, zoom }) => {
  const [bounds, setBounds] = useState([]);
  const [points, setPoints] = useState([]);
  const [startMarker, setStartMarker] = useState(null);
  const [finishMarker, setFinishMarker] = useState(null);

  const route = useSelector(selectRoute);

  useEffect(() => {
    if (route) {
      const {
        geometry: { coordinates },
      } = route;
      const currentPoints = coordinates.map((coordinate) => [coordinate[1], coordinate[0]]);
      setPoints(currentPoints);

      const currentStartMarker = { lat: currentPoints[0][0], lng: currentPoints[0][1] };
      setStartMarker(currentStartMarker);

      const currentFinishMarker = {
        lat: currentPoints[currentPoints.length - 1][0],
        lng: currentPoints[currentPoints.length - 1][1],
      };
      setFinishMarker(currentFinishMarker);

      const currentBounds = [currentStartMarker, currentFinishMarker].map(({ lat, lng }) => [
        lat,
        lng,
      ]);
      setBounds(currentBounds);
    }
  }, [route]);

  return (
    <MapContainer bounds={bounds} center={center} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Polyline color="blue" opacity={0.6} weight={5} positions={points}>
        <Popup>Polygon</Popup>
      </Polyline>

      {startMarker && <Marker position={startMarker} text="Начальная точка" />}

      {finishMarker && <Marker position={finishMarker} text="Конечная точка" />}

      <Bound bounds={bounds} />
    </MapContainer>
  );
};

export default Map;
