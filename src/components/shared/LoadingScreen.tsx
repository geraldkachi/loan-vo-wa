import { Spinner } from 'arvara';

const LoadingScreen = () => {
  return (
      <div className="flex h-screen">
          <div className="m-auto">
            <Spinner size={10} />
            <p>Loading...</p>
          </div>
      </div>
  )
};

export default LoadingScreen;
