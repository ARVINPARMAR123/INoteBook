import Notes from './Notes';
import ErrorBoundary from './ErrorBoundary';

const Home = () => { 
  return (
      <ErrorBoundary>
        <Notes/>
      </ErrorBoundary>
  )};

export default Home;