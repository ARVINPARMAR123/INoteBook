import Notes from './Notes';
import ErrorBoundary from './ErrorBoundary';

const Home = ({showAlert}) => { 
  return (
      <ErrorBoundary>
        <Notes showAlert={showAlert} />
      </ErrorBoundary>
  )};

export default Home;