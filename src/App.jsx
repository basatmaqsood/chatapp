import Register from "./pages/Register.jsx";
import Login from "./pages/login.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.jsx";
function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={currentUser ? <Home /> : <Login/>} />
        <Route path="/">
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
