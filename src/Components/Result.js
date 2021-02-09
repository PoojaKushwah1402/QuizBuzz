import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'



import  "./quiz.css";


const ShowResult = props => {
    const success = 'Hey, you did a great job, Keep it up';
    const failure = 'ohhooo, No worry better try next time';
    const status = (props.marks > 5) ? success : failure;
    const user = props.user;

    return(
        <div className='result-container'>
            <h1 className='greet' > {status +' '+ user}!!!! </h1>
            <h2 className='show-results' > You have earned {props.marks} Points...</h2>
            <Link to='/' >
                  <Button variant="outline-light">New Quiz</Button>
            </Link>
        </div>
    )

}

export default ShowResult;