import { useState } from "react"
import CheckboxTree from "./components/checkboxTree"
import {checkboxData} from "./data.js"

function App() {
  const [checked,setchecked] = useState({ });

  const updateChildren = (node,value,updated={})=>{
    updated[node.id] = value;
    if(node.children){
      node.children.forEach((child,index)=>{
         updateChildren(child,value,updated);
      })
    }
    return updated;
  }

  const syncParentCheck = (updatedCheck) => {
    const check = (node)=>{
      if(!node.children)return updatedCheck[node.id];

      const childStates = node.children.map(check);

      const allchecked = childStates.every(state => state=== true);
      const noneChecked = childStates.every(state => state=== false);

      if(allchecked){
        updatedCheck[node.id] = true;
        return true;
      }
      
      if(noneChecked){
       updatedCheck[node.id] = false;
       return false;
    }
  

    }

    checkboxData.forEach(node=>check(node));
    return updatedCheck;
  }
  const onCheckChange = (node,value) => {
    let updatedCheck = updateChildren(node,value,{...checked});
    updatedCheck = syncParentCheck(updatedCheck);
    setchecked(updatedCheck);
  }

  return (
    <div style={{padding: "10px"}}>
      <h3>Nested CheckBox Tree</h3>
      {checkboxData.map((node,index)=>{
        return <CheckboxTree node={node} checked={checked} onCheckChange={onCheckChange}/>
      })}
    </div>
  )
}

export default App
