import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Achievement from "./components/achievement";
import Detail from "./components/detail";
import Skills from "./components/skills";
import It from "./components/it"; // ✅ Import komponen IT

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/achievement" element={<Achievement />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/it" element={<It />} /> {/* ✅ Tambah route IT */}
    </Routes>
  );
}
