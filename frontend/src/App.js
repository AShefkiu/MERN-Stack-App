//import './App.css';
import Menu from "./Menu";
import Students from "./Students";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddStudent from './AddStudent'
function App() {
  return (
    <Router>
    <div className="App">
      <Menu />
      <Routes>
          <Route exact path="/students" element={<Students />} />
          <Route exact path="students/add" element={<AddStudent/>}/>
      </Routes>
    </div>
    </Router>

  );
}

export default App;
