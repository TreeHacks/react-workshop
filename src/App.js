import { Button } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';

function handleClick() {
  console.log("hello?");
}

function handleNewButton() {
  console.log("this is my new button");
}

function App() {
  return (
    <div className="App ">
      <h1> Hello world </h1>
      <button onClick={handleClick}> Click me! </button>
      <Button variant="outlined" onClick={handleNewButton}> New button (: </Button>
      
      <Home />
    </div>
  );
}

export default App;