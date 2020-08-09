import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { theme } from './core/theme';
import Routes from './navigation/Routes';
import configureStore from './redux/store';


const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <Routes />
        </PaperProvider>
      </Provider>
    )
  }
}

export default App;