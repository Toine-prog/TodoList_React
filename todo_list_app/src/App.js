import './App.css';
import { Button } from 'react-bootstrap';
import NavBarItem from './components/NavBar'
import  { UseContext, UseEffects, UseState, UseRef } from "./screens"

function App() {
  return (
    <div className="App">
      <NavBarItem />
      <UseContext />
      <UseEffects />
      <UseState />
      <UseRef />
    </div>
  );
}

export default App;
