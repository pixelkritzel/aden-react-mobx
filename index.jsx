import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';

import App from './js/components/App.jsx';
import appStore from './js/stores/app-store';

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('app')
);
