import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from './pages/home.tsx';
import RoomMain from './pages/room/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/j/:room",
    element: <RoomMain />
  },
]);

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='system' storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
)
