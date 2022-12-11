import React from 'react';
import { Provider } from 'react-redux';
import Pages from './components/pages/Pages';
import './style/main.scss';
import store from './controller/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Pages />
      </Provider>
    </>
  );
}

export default App;
