import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import Landing from "./components/Landing.jsx";
import Header from "./components/Header";
import Pilot from "./components/Pilot";
import Girls from "./components/Character";
import Synopsis from "./components/Synopsis";
import ContactUs from "./components/Footer";


import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route index element={<Landing />} />
    </Route>

  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);
