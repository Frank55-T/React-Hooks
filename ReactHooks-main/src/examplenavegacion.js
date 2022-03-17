import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Timer from './components/Timer';
import HelloMessage from './components/HelloMessage.js'
import Avatar from './components/Avatar.js'
import TODOAPP from "./components/TodoAPP.js";
import  { useState, useEffect } from 'react';
import { Nav, Navbar } from "react-bootstrap";


export default function ExampleNavegacion() {
    return (
      <Router>
        <Navbar bg="light">
          <Nav >
            <Nav.Link>
              <Link className="text-decoration-none text-dark" to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-dark" to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-dark" to="/dashboard">Dashboard</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-dark" to="/Timer">Timer</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-dark" to="/HelloMessage">HelloMessage</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-dark" to="/Avatar">Avatar</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-dark" to="/TODOApp">TODOApp</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-dark" to="/Efecto">Efecto</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-dark" to="/Estado">Estado</Link>
            </Nav.Link>
          </Nav>
      </Navbar>
          <hr className="bg-primary m-0"/>
  
          
          <Routes>
            <Route exact path="/"  element={<Home />}> 
            </Route>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/dashboard" element={<Dashboard />}>
            </Route>
            <Route exact path="/Timer" element={<Timer />}>
            </Route>
            <Route exact path="/HelloMessage" element={<HelloMessage />}>
            </Route>
            <Route exact path="/Avatar" element={<Avatar />}>
            </Route>
            <Route exact path="/TODOApp" element={<TODOAPP />}>
            </Route>
            <Route exact path="/Efecto" element={<Efecto />}>
            </Route>
            <Route exact path="/Estado" element={<FuncionEstado />}>
            </Route>
          </Routes>
        
      </Router>
    );
  }

  function Home() {

    useEffect(() => {
      document.title = `Home`;
    });

    return (
      <div className="container-fluid">
        <h2>Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div className="container-fluid">
        <h2>About</h2>
      </div>
    );
  }
  
  function Dashboard() {
    return (
      <div className="container-fluid">
        <h2>Dashboard</h2>
      </div>
    );
  }

  function Efecto() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });
  
    return (
      <div className="container-fluid">
        <h2>Count</h2>
        <p>Hook de efecto <br/>
        Este hook sirve para contar las veces que hacemos click, pues se actualiza en tiempo real
        en el método onClick del botón, es como una variable estática global que podemos usar a nuestro antojo</p>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

  function FuncionEstado() {
    const [count1, setCount1] = useState(0);
  
    return (
      <div className="container-fluid">
        <h2>Count</h2>
        <p>Ejemplo de hook de estado</p>
        <p>You clicked {count1} times</p>
         <button onClick={() => setCount1(count1 + 1)}>
          Click me
        </button> 
      </div>
    );
  }
  
  