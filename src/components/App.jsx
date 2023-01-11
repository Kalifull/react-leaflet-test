import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

import routes from '../routes';

const App = () => {
  return (
    <Routes>
      <Route page="/" element={<Layout />}>
        <Route path={routes.getHomePathPage()} element={<Home />} />
        <Route path={routes.getNotFoundPathPage()} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
