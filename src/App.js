import HeroBanner from "./components/HeroBanner";
import JobListContainer from "./components/JobListContainer";
import CompaniesListContainer from "./components/CompaniesListContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <JobListContainer />
      <CompaniesListContainer />
    </div>
  );
}

export default App;
