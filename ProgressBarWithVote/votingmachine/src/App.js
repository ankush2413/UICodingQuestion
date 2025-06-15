import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Vote from './Components/Vote';

function App() {
  const Names = ['Alice','Ana','Stemen','Valkano','Stylo','Mylo'];
  const [votes,setVotes] = useState(Array(Names.length).fill(0));
  
  return (
    <div className='container'>
      {
        Names.map((name,index)=>( <Vote name={name} index={index} /> ))
      }
    </div>
  );
}

export default App;
