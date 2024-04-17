import React from 'react';
import ReactDOM from "react-dom/client"
import { RouterProvider, createHashRouter } from "react-router-dom"

import Pokedex from './components/Pokedex';
import About from './components/About';
import { Root } from './components/Root';
import './components/style.css'


const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true, // This marks this route as the index route
        element: <Pokedex />, // This is the component rendered when the path is "/"
      },
      {
          path: "/pokedex",
          element: <Pokedex />,
      },
      {
          path: "/about",
          element: <About />,
      },
  ],

},

]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)

