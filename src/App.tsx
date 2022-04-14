import React from "react";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import { MyNavbar } from "./components/MyNavbar";
import { HomeScreen, LoginScreen, RegisterScreen } from "./screens";
import { RecList } from "./screens/RecListById";

const App: React.FC = () => {
  return (
    <div>
      <MyNavbar />
      <Container style={{ maxWidth: 425 }}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/rec-list/:recListId" element={<RecList />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
