import React, { useState } from "react";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import "./quiz.css";
import Category from './const'

const DropItems = category => {
    return category.map((catgry) => (
        <Dropdown.Item 
            key={catgry.id} 
            eventKey={JSON.stringify(catgry)}
        >
            {catgry.category}
        </Dropdown.Item>
    ));
}

const Dashboard = props => {
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const items = DropItems(Category);

    return (
        <div className='dashboard-container'>
            <h1 className='wel-msg'>
                Test Your Knowledge with <span className='highlight'>QuizBuzz</span>
            </h1>
            <p className='detl-msg'>
                Challenge yourself with trivia questions across various categories. 
                Enter your name and pick a category to begin!
            </p>
            
            <div className='form'>
                <div className='form-group'>
                    <label htmlFor='username' className='user-name'>
                        Your Name
                    </label>
                    <input 
                        id='username' 
                        placeholder='Enter your name...' 
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="off"
                    />
                </div>

                <div className='container'>
                    <label className='category-label'>Select Category</label>
                    
                    <DropdownButton 
                        id="dropdown-menu-align-right"
                        className='select-btn'
                        onSelect={(e) => setCategory(JSON.parse(e))} 
                        title={category !== '' ? category.category : 'Choose a category...'}
                    >
                        {items}
                    </DropdownButton>

                    {category !== '' && (
                        <div className='categry'>
                            <span>📌</span>
                            <b>Selected:</b> {category.category}
                        </div>
                    )}
                </div>

                <Link to='/quizstart'>
                    <button 
                        disabled={!(category && name)} 
                        className='btn-manul'
                        onClick={() => props.onSubmit(category, name)}
                    >
                        🚀 Start Quiz
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard;
