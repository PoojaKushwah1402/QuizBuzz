import React from "react";
import { Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { useState } from "react";
import { Link } from 'react-router-dom'

import  "./quiz.css";
import Category from './const'

const DropItems = category => {
    let items = category.map((catgry)=> <Dropdown.Item key ={catgry.id} eventKey={JSON.stringify(catgry)} >{catgry.category}</Dropdown.Item>);
    return items;
}



const Dashboard = props => {

    let [category, setCategory] = useState('');
    let [name, setName] = useState('');
    let items = DropItems(Category);


    return(
        <>
            <h1 className='wel-msg' > Welcome to QuizzBuzz....!! </h1>
            <h2 className='detl-msg' > Please fill below Details for the Quiz Game.. </h2>
            <div className='form' >
                <label htmlFor='username' className='user-name' >Enter your Name :</label>
                <input id='username' placeholder='Enter Name....' onChange={(e)=> setName(e.target.value)} />

            <div className='container'>

                <DropdownButton id="dropdown-menu-align-right"
                    className='select-btn'
                    onSelect={(e) => setCategory(JSON.parse(e)) } 
                    title="Category">
                    {items}
                </DropdownButton>

                <div className='categry' > <b>Select Category : </b>{category !== '' ? category.category : 'Select'} </div>

            </div>



                <Link to='/quizstart' >
                    <Button disabled={!(category && name)} 
                            className='btn-manul' 
                            variant="outline-success"
                            onClick = {()=> props.onSubmit(category, name) } > Submit</Button>
                </Link>

               
 
            </div>
        </>
    )

}

export default Dashboard;