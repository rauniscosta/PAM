import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import TabsNavigator from './src/navigation/TabsNavigator';

const App = () => {
  return (
    <PaperProvider>
      <TabsNavigator />
    </PaperProvider>
  );
};

export default App;