import axios from 'axios';

const routerApi = {
  async getRoute(routeObject) {
    const original = [...routeObject.original].reverse().join(',');
    const destination = [...routeObject.destination].reverse().join(',');
    const {
      data: { routes },
    } = await axios.get(
      `http://router.project-osrm.org/route/v1/driving/${original};${destination}?steps=true&geometries=geojson&overview=full`
    );

    return routes[0];
  },
};

export default routerApi;
