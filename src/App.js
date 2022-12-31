import './Themes/Dark.css'
import './App.css';
import Main from './components/Main';
import { useState } from 'react';
import Navigation from './components/Navigation';

function App() {
  const [open,setOpen]=useState(false)
  return (
    <div className="App">
  <Navigation open={open}/>
  <Main  setOpen={setOpen} open={open}/>
 
    </div>
  );
}

export default App;
