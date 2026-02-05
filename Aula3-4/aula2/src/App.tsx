import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home, PerfilUser} from "./pages/pages";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<PerfilUser />} />
      </Routes>
    </>
  );
}

export default App;