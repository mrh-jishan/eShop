import React from 'react';
import { Provider } from 'react-redux';
import Providers from './navigation';
import configureStore from './redux/store';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Providers />
      </Provider>
    )
  }
}

export default App;