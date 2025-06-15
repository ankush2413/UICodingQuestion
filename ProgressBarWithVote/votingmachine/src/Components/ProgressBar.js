import React from 'react';
import './ProgressBar.css'


const ProgressBar = (props) => {
    return (
        <div className='outer-div'>
            <div className='inner-div' style={{width:`${props.width}%`}}>
                {props.name} : {props.width} 
            </div>
        </div>
    )
}

export default ProgressBar;

