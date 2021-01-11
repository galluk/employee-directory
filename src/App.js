// import logo from 'logo.svg';
import EmployeeResultContainer from "./components/EmployeeResultContainer";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
      <EmployeeResultContainer />
    </div>
  );
  // return <EmployeeResultContainer />;
}

export default App;
