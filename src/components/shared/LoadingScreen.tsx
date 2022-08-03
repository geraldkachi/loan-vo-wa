// import { Spinner } from 'arvara';

const Spinner = ({}:any) => null

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
