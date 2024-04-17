import React from 'react';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import { Link, Outlet } from "react-router-dom"
import './components/style.css'
import Pokedex from './components/Pokedex';
import About from './components/About'
// function App() {
//   return (
//     <>
//       <Pokedex/>
//       <Router>
//       <Switch>
//         <Route path="/" exact component={Pokedex} />
//         <Route path="/pokedex" component={Pokedex} />
//         <Route path="/about" component={About} />
//       </Switch>
//     </Router>
//     </>
//   );
// }

// export default App;

export default function App() {
  return (
      <>
          <nav>
              <Link to="/about">About</Link>
              <Link to="/pokedex">Pokedex</Link>
          </nav>
          <Outlet />
      </>
  )
}
