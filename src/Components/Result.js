import React from "react";
import { Link } from 'react-router-dom'

import "./quiz.css";

const ShowResult = props => {
    const isSuccess = props.marks > 5;
    const emoji = isSuccess ? '🎉' : '💪';
    const title = isSuccess 
        ? "Amazing job" 
        : "Nice try";
    const subtitle = isSuccess 
        ? "You're a trivia champion! Keep up the great work!"
        : "Don't give up! Practice makes perfect.";

    return (
        <div className='result-container'>
            <div className='result-card'>
                <div className='result-emoji'>{emoji}</div>
                
                <h1 className='greet'>
                    {title}, <span className='username'>{props.user}</span>!
                </h1>
                
                <p className='show-results'>{subtitle}</p>
                
                <div className='score-display'>
                    <span className='score-number'>{props.marks}</span>
                    <span className='score-total'>/ 10</span>
                </div>

                <Link to='/'>
                    <button 
                        className='new-quiz-btn'
                        onClick={() => props.newQuiz()}
                    >
                        🔄 Try Another Quiz
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ShowResult;
