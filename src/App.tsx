import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { MyNavbar } from "./components/MyNavbar";
import { HomeScreen } from "./screens/Home";
import { LoginScreen } from "./screens/Login";
import { RegisterScreen } from "./screens/Register";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <Container style={{ maxWidth: 425 }}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
