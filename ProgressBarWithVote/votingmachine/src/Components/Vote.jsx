import React,{useState} from 'react';
import ProgressBar from './ProgressBar';

const Vote = (props)=>{
    const votes = props.votes
    const handleOnClick = (index) =>{
        const newVotes = [...votes];
        newVotes[index]++;
        props.setVotes(newVotes);
    }
    return (
        <>
        <div style={{display:'flex', justifyContent:'center', gap:'10px',margin:'5px'}}>
            <div>
                <ProgressBar name={props.name} width={props.width}/>
            </div>
            <div>
                <button onClick={()=>handleOnClick(props.index)}>Vote</button>
            </div>
        </div>
        </>
    )
}

export default Vote;