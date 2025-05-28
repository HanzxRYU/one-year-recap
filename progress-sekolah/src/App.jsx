import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Achievement from "./components/achievement";
import Detail from "./components/detail";
import Skills from "./components/skills";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/achievement" element={<Achievement />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
}
