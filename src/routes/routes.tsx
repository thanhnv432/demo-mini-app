// routes/route.ts
import Home from "../pages/Home"
import About from "../pages/About"
import History from "../pages/History"
import Profile from "../pages/Profile"

import MainLayout from "../layout/MainLayout"

export const appRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/history", element: <History /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]

export const titleMap: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/history": "History",
  "/profile": "Profile",
}
