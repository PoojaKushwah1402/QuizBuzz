import React from "react";
import { Link } from 'react-router-dom'

import './display.css'
import Questions from "./questions";

class Content extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            questCount: 0,
            questions: [],
            currentQuest: {},
            total: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.question) {
            state = {
                questCount: state.questCount,
                questions: props.question,
                currentQuest: props.question[state.questCount],
            }
            return state
        }
        return null
    }

    nextQuestion = total => {
        if (this.state.questCount === 9) {
            this.props.onQuizSubmit(this.state.total + total)
            return;
        }

        this.setState({
            total: this.state.total + total,
            currentQuest: this.state.questions[++(this.state.questCount)]
        })
    }

    render() {
        const progress = ((this.state.questCount + 1) / 10) * 100;
        
        return (
            <div className='question-div'>
                <div className='content-head'>
                    <div className='category-badge'>
                        {this.props.category}
                    </div>
                    <div className='count'>
                        {this.state.questCount + 1} / 10
                    </div>
                    <Link to='/'>
                        <button 
                            className='end-quiz-btn'
                            onClick={() => this.props.onQuizStop()}
                        >
                            End Quiz
                        </button>
                    </Link>
                </div>

                <div className='progress-bar'>
                    <div 
                        className='progress-fill' 
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <Questions 
                    question={this.state.currentQuest}
                    onNext={this.nextQuestion} 
                    count={this.state.questCount}
                />
            </div>
        )
    }
}

export default Content;
