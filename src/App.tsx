import Routers from "./routes";
import { QueryClientProvider, QueryClient } from 'react-query';

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routers />
    </QueryClientProvider>
  );
};

export default App;
