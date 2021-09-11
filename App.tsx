// Bibliotecas Externas
import React from 'react';
import {StatusBar} from 'react-native';

// Componentes
import {Home} from './src/pages/Home';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
};

export default App;
