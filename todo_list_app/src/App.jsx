import './App.css';
import { Button } from 'react-bootstrap';
import NavBarItem from './components/NavBar';
import  { UseContext, UseEffects, UseState, UseRef, Home } from "./screens";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <NavBarItem />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UseState" element={<UseState />} />
            <Route path="/UseEffects" element={<UseEffects />} />
            <Route path="/UseContext" element={<UseContext />} />
            <Route path="/UseRef" element={<UseRef />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
