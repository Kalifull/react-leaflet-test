import { useSelector } from 'react-redux';

import Loader from '../../components/Loader';
import Map from '../../components/Map';

import { selectRouteLoadingStatus, routeLoadingError } from '../../store/reducers/router/selectors';

const Home = () => {
  const error = useSelector(routeLoadingError);
  const isLoading = useSelector(selectRouteLoadingStatus);

  if (error) {
    return <div>Произошла ошибка</div>;
  }

  return isLoading ? <Loader /> : <Map center={{ lat: 50, lng: 50 }} zoom={12} />;
};

export default Home;
