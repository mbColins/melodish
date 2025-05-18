import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavigation from './src/navigation';
import './i18n';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
