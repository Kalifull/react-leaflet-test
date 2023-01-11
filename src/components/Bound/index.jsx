import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const Bound = ({ bounds }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !bounds.length) {
      return;
    }

    map.fitBounds(bounds);
  }, [map, bounds]);
  return null;
};

export default Bound;
