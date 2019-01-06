import React from 'react';

import { Provider } from 'react-redux';
import Main from './pages/main';
import GlobalStyle from './styles/global';

// import './config/reactotron';
import store from './store';

// import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Main />
  </Provider>
);

export default App;
