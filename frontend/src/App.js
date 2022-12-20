import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import AddEmployee from "./users/AddEmployee";
import EditEmployee from "./users/EditEmployee";
import ViewEmployee from "./users/ViewEmployee";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/add-emplyee" element={<AddEmployee/>} />
          <Route exact path="/edit-employee/:id" element={<EditEmployee/>} />
          <Route exact path="/view-employee/:id" element={<ViewEmployee/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
