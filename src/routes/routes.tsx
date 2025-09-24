// routes/route.ts
import About from "pages/about"
import Home from "pages/home"

export const appRoutes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
];

export const titleMap: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/history": "History",
  "/profile": "Profile",
}
