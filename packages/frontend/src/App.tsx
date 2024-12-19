import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Routes from "./Routes";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3 px-3">
        <NavLink to="/" className="fw-bold text-muted">
          Scratch
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <NavLink to="/signup" className="nav-link">
              <Nav.Item>Signup</Nav.Item>
            </NavLink>
            <NavLink to="/login" className="nav-link">
              <Nav.Item>Login</Nav.Item>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
