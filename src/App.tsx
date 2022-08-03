import { QueryClientProvider, QueryClient } from 'react-query';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Routers from "./routes";

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routers />
     </QueryClientProvider>
  );
};

export default App;
