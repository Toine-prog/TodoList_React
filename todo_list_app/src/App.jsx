import './App.css';
import NavBarItem from './components/NavBar';
import  { UseContext, UseState, UseReducer, Home } from "./screens";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <NavBarItem />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UseState" element={<UseState />} />
            <Route path="/UseContext" element={<UseContext />} />
            <Route path="/UseReducer" element={<UseReducer />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
