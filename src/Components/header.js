import React from 'react';
import WbIncandescentTwoToneIcon from '@material-ui/icons/WbIncandescentTwoTone';
import { Link } from 'react-router-dom';

import "./quiz.css";

const Header = props => {
    return (
        <header className='quiz-header'>
            <Link to='/' className='header-logo'>
                <WbIncandescentTwoToneIcon />
                <div className='heading'>QuizBuzz</div>
            </Link>
            {props.name && (
                <div className='user'>
                    Hey {props.name}!
                </div>
            )}
        </header>
    )
}

export default Header;
