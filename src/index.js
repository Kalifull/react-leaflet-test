import ReactDOM from 'react-dom/client';

import init from './init';

const app = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const vdom = init();
  root.render(vdom);
};

app();
