import React,{useState} from 'react';
import ProgressBar from './ProgressBar';

const Vote = (props)=>{

    const handleOnClick = (index) =>{
        alert(`You are Voting:${index}`)
    }

    return (
        <>
        <div style={{display:'flex', justifyContent:'center', gap:'10px',margin:'5px'}}>
            <div style={{ maxWidth:'600px',flexGrow:'1'}}>
                <ProgressBar name={props.name}/>
            </div>
            <div style={{}}>
                <button onClick={()=>handleOnClick(props.index)}>Vote</button>
            </div>
        </div>
        </>
    )
}

export default Vote;