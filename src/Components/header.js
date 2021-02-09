import React from 'react';
import WbIncandescentTwoToneIcon from '@material-ui/icons/WbIncandescentTwoTone';

import  "./quiz.css";

const Header = props => {

    return(
        <div className='quiz-header' >
                <WbIncandescentTwoToneIcon />
                <div className='heading'> QuiZ buZz </div>
                <div className='user' > Hey {props.name} ! </div>
        </div>
    )

}

export default Header;