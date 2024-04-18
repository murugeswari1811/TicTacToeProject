import { useState } from 'react'
import './App.css'
import Home from './components/home/home';
import Game from './components/game/game';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/tttgame",
    element: <Game/>, 
  },

]);


function App() {

  return (
      <>
        <RouterProvider router={router} />
      </>
  )
}

export default App
