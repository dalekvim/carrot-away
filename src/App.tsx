import React from "react";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import { MyNavbar } from "./components/MyNavbar";
import { HomeScreen, LoginScreen, RegisterScreen } from "./screens";
import { Anime } from "./screens/AnimeById";
import { RecList } from "./screens/RecListById";
import { RecListCreate } from "./screens/RecListCreate";

const App: React.FC = () => {
  return (
    <div>
      <MyNavbar />
      <Container style={{ maxWidth: 425 }}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/rec-list/create" element={<RecListCreate />} />
          <Route path="/rec-list/:recListId" element={<RecList />} />
          <Route path="/anime/:malId" element={<Anime />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
