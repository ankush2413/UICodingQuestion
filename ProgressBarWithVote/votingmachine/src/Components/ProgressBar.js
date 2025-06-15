import React from 'react';
import './ProgressBar.css'


const ProgressBar = (props) => {
    return (
        <div className='outer-div'>
            <div className='inner-div'>
                {props.name} : 70%
            </div>
        </div>
    )
}

export default ProgressBar;

