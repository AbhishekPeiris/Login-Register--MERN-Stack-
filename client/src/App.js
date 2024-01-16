import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/SignUp";
import Login from "./components/Login";

function App() {
    const user = localStorage.getItem("token");

    return (
        <Router>
            <Routes>
                {user && <Route path="/" element={<Main />} />}
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate replace to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
