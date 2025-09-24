import About from "pages/about";
import History from "pages/history";
import Home from "pages/home";
import MainLayout from "pages/layout";
import Profile from "pages/profile";
import { MemoryRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
     <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="history" element={<History />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>
      </Routes>
    </MemoryRouter>
  )
}
