import Notes from "../Notes/Notes";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Home = ({ showAlert }) => {
  return (
    <ErrorBoundary>
      <Notes showAlert={showAlert} />
    </ErrorBoundary>
  );
};

export default Home;
