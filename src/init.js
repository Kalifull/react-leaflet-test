import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

import store from './store';

const init = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

export default init;
