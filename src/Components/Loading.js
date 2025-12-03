import React from "react";

import "./quiz.css";

const Loading = () => {
    return (
        <div className='Loading'>
            <div className='loading-spinner'></div>
            <p className='loading-text'>Loading your questions...</p>
        </div>
    )
}

export default Loading;
