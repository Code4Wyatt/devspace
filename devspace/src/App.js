import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Nav from "../src/components/Nav/Nav"
import Home from "./pages/Home/Home.js"
import Register from "./pages/Register/Register.js"
import Login from "./pages/Login/Login.js"
import Developers from "./pages/Developers/Developers.js"
import Employers from "./pages/Employers/Employers.js"
import Roles from "./pages/Roles/Roles.js"

function App() {
  return (
   <Router>
     <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/roles" element={<Roles />} />
      </Routes>
    </Router>
  );
}

export default App;
