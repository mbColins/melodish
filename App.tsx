
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigation from './src/navigation';
import './i18n';




function App(): React.JSX.Element {

  return (
   <NavigationContainer>
    <RootNavigation/>
   </NavigationContainer>
  );
}


export default App;
