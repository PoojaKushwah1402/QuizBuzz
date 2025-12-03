import React from "react";
import { Link } from 'react-router-dom'

import './display.css';
import shuffle from "./shuffle";
import Loading from "./Loading";

// Helper function to decode HTML entities
const decodeHTML = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

class Questions extends React.PureComponent {

    constructor(props) {
        super(props);
        
        this.state = {
            question: '',
            options: [],
            answer: '',
            next: false,
            mark: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        let optionarr = [];

        if (props.question && props.question.question !== state.question) {
            for (let x in props.question.incorrect_answers) {
                let option = {
                    correct: 0,
                    value: decodeHTML(props.question.incorrect_answers[x])
                }
                optionarr.push(option);
            }

            optionarr.push({
                correct: 1,
                value: decodeHTML(props.question.correct_answer)
            });

            optionarr = shuffle.call(optionarr);

            state = {
                question: props.question.question,
                options: optionarr,
                answer: '',
                next: false,
                mark: 0
            }
            return state;
        }
        return state
    }

    setAnswer = (e) => {
        let select = e.target.id;

        if (select === 'main') {
            return;
        } 
        else if (e.target.className === 'option') {
            this.setState({
                answer: select
            });

            let allOption = document.getElementsByClassName('option');
            for (let x = 0; x < allOption.length; x++) {
                allOption[x].className = 'option';
            }
            e.target.className = 'selected option';
        }
    }

    lockAnswer = () => {
        let markind = this.state.answer
        let markedans = this.state.options[markind]
        let correctindx = this.state.options.findIndex((option) => option.correct === 1);
        let correctans = this.state.options[correctindx];

        this.setState({
            next: true,
            mark: 1,
            answer: ''
        })

        let ans = document.getElementById(correctindx);
        ans.className = 'correct option-disable'

        if (correctans.value !== markedans.value) {
            let wrng = document.getElementById(markind);
            wrng.className = 'wrong option-disable'
            this.setState({
                mark: 0
            })
        }

        let allOption = document.getElementsByClassName('option');

        for (let x = 0; x < 4; x++) {
            if (allOption[0]) {
                allOption[0].className = 'option-disable';
            }
        }
    }

    moveNext = () => {
        this.setState({
            question: ''
        })
        let allOption = document.getElementsByClassName('option-disable');
        for (let x = 0; x < 4; x++) {
            if (allOption[0]) {
                allOption[0].className = 'option';
            }
        }
        this.props.onNext(this.state.mark)
    }

    render() {
        let options = [];
        let next = (this.props.count === 9) ? 'Submit Quiz' : 'Next Question'
        let url = (this.props.count < 9) ? `/quizstart/${this.props.count}` : '/quizresult'

        if (this.state.question) {
            options = this.state.options.map((option, index) => (
                <div className='option' id={index} key={index}>
                    {option.value}
                </div>
            ))
        } else {
            options = <Loading />
        }

        return (
            <div className='quest-box'>
                <div className='question'>
                    {decodeHTML(this.state.question)}
                </div>

                <div className='option-container' id='main' onClick={this.setAnswer}>
                    {options}
                </div>

                <div className='quiz-actions'>
                    <button 
                        className='qst-btn lock-btn'
                        onClick={this.lockAnswer}
                        disabled={!this.state.answer}
                    >
                        🔒 Lock Answer
                    </button>

                    <Link to={url}>
                        <button 
                            className='qst-btn next-btn'
                            onClick={this.moveNext}
                            disabled={!this.state.next}
                        >
                            {this.props.count === 9 ? '🏆 ' : '➡️ '}{next}
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Questions;
