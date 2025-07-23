import { useState } from 'react';
import Vote from './Components/Vote';

function App() {
  const Names = ['Alice','Ana','Stemen','Valkano','Stylo','Mylo'];
  const [votes,setVotes] = useState(Array(Names.length).fill(0));
  const getPercentage = (index)=>{
    const totalVotes = votes.reduce((sum,val)=>sum+val,0);
    return totalVotes===0?0:Math.round((votes[index]/totalVotes)*100);
  }

  return (
    <div>
      {
        Names.map((name,index)=>( <Vote name={name} index={index} votes={votes} setVotes={setVotes} width={getPercentage(index)} /> ))
      }
    </div>
  );
}

export default App;
