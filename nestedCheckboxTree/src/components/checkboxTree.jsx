import React from "react";

const CheckboxTree  = ({node,checked,onCheckChange}) => {
    const isCheck = Boolean(checked?.[node.id]);
    const handleChange = (e) => {
        const newChecked = e.target.checked;
        console.log(`New Value:${newChecked}`);
        onCheckChange(node,newChecked)

    }
    return(
    <div style={{marginLeft: "20px", padding: "3px"}}>
        <label>
            <input type="checkbox" checked={isCheck} onChange={handleChange}/>
            {node.label}
        </label>
        {node.children && node.children.map((child,index)=>{
            return  <CheckboxTree node={child} checked={checked} onCheckChange={onCheckChange}/>
        })}
    </div>)
} 

export default CheckboxTree;