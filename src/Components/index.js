import React from "react";
import { Switch, Route } from 'react-router-dom'

import Header from './header'
import Dashboard from "./Dashboard";
import Footer from "./footer";
import getQuestions from "./useApi";
import Content from "./DisplayContent";
import ShowResult from "./Result";

class Quiz extends React.Component {

    constructor () {
        super();
        this.state = {
            username : '',
            category : {},//Category[0],
            question : {},
            marks : 0
        }
    }


     getQuestion = async () => {
        let questions = await getQuestions(this.state.category.url);
        console.log(questions);
        this.setState({
            question : questions
        })
    }

    setDeatil = (cat, name) => {
        this.setState({
            category : cat,
            username : name
        });

        setTimeout(() => {
            this.getQuestion(cat.url)
        }, 0);

    }

    stopQuiz = () => {
        this.setState({
            category : {},
            question : {},
            username : '',
            marks:0
        });
    }

    onQuizend = totalMarks => {
        console.log(totalMarks);

        this.setState({
            marks : totalMarks
        })

    }



    render() {
        return(
            <>
                <Header name={this.state.username} />

                <Switch>
                    <Route exact path ='/'                         
                        render={(props) => (
                            <Dashboard {...props} 
                            onSubmit = {this.setDeatil} />)}
                    />

                    <Route  path ='/quizstart'                         
                        render={(props) => (
                            <Content {...props} 
                            question = {this.state.question} 
                            onQuizSubmit = {this.onQuizend}
                            onQuizStop = {this.stopQuiz} 
                            category = {this.state.category.category}/>)}
                    />

                    <Route exact path ='/quizresult'                         
                        render={(props) => (
                            <ShowResult {...props} 
                            marks = {this.state.marks} 
                            user = {this.state.username} 
                            newQuiz = {this.stopQuiz}/>)}
                    />
                </Switch>


                <Footer />
            </>
        )
    }

}

export default Quiz