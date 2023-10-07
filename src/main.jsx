import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import Landing from "./pages/Landing";
import Pilot from "./pages/Pilot";
import Characters from './pages/Character.jsx';
import Synopsis from './pages/Synopsis.jsx';
import Investors from './pages/Investors.jsx';

import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route index element={<Landing />} />
      <Route path="pilot" element={<Pilot />} />
      <Route path="characters" element={<Characters />} />
      <Route path="synopsis" element={<Synopsis />} />
      <Route path="investors" element={<Investors />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);
