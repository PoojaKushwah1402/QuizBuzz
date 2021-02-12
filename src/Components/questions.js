import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'



import './display.css';
import shuffle from "./shuffle";
import Loading from "./Loading";


class Questions extends React.PureComponent {

    constructor( props ) {
        super(props);
        
        this.state = {
            question : '',
            options : [],
            answer : '',
            next : false,
            mark : 0
        }
    }

    static getDerivedStateFromProps(props, state) {

        let optionarr =[];
       // console.log(props)

        if(props.question && props.question.question !== state.question) {

            for(let x in props.question.incorrect_answers) {
                let option = {
                    correct : 0,
                    value : props.question.incorrect_answers[x]
                }
              //  console.log(state)
                optionarr.push(option);
            }

            optionarr.push({
                correct : 1,
                value : props.question.correct_answer
            });

            optionarr = shuffle.call(optionarr);

            state = {
                question : props.question.question,
                options : optionarr  ,
                 answer : '',
                 next : false,
                 mark : 0
            }
            return state;
        }
        return state
    }

    setAnswer = (e) => {
       // console.log(e.target.id)
        let select = e.target.id;

        if(select === 'main') {
            return;
        } 
        else if(e.target.className === 'option') {


           // select = Number(select);
            //console.log(select)
    
            this.setState({
                answer : select
            });
           //console.log(e);
        
           let allOption = document.getElementsByClassName('option');
          // console.log(allOption);
           for(let x=0; x<allOption.length; x++) {
               allOption[x].className = 'option';
             //   console.log(allOption[x])
           }
           e.target.className = 'selected option';
          // console.log('setanswer',e.target.className );

        }
    }

    lockAnswer = () => {

        let markind = this.state.answer
        let markedans = this.state.options[markind]
        let correctindx = this.state.options.findIndex( (option) => option.correct === 1 );
        let correctans = this.state.options[correctindx];

        this.setState({
            next : true,
            mark : 1,
            answer : ''
        })

       // console.log(correctindx, this.state.answer ,markedans);
        let ans = document.getElementById(correctindx);
      //  console.log(ans)
        ans.className = 'correct option-disable'
       // console.log('lockanswer',ans.className );


        if(correctans.value !== markedans.value) {
            let wrng = document.getElementById(markind);
            wrng.className = 'wrong option-disable'
            this.setState({
                mark : 0
            })
        }

        let allOption = document.getElementsByClassName('option');

        for(let x=0; x<4; x++) {

          //  console.log(allOption[0])
            if(allOption[0]) {
                allOption[0].className = 'option-disable';
                
            }

        }

    }

    moveNext = () => {
        this.setState({
            question : ''
        })
        let allOption = document.getElementsByClassName('option-disable');
        for(let x=0; x<4; x++) {
              if(allOption[0]) {
                  allOption[0].className = 'option';
              }
          }
        this.props.onNext(this.state.mark)
    }


    render() {

        let options = [];
        let next = (this.props.count === 9) ? 'Submit Quiz' : 'Next Question'
        let url = (this.props.count < 9) ? `/quizstart/${this.props.count}` : '/quizresult'

        if( this.state.question) {
            options = this.state.options.map( (option, index) => <div className='option' id={index} > {option.value} </div> )
        }else {
            options = <Loading />
        }


        return(
            <div className='quest-box' >
    
                <div className='question'> {this.state.question} </div>
    
                <div className='option-container' id ='main' onClick = {this.setAnswer} >
                    {options}

                </div>
    
                     <Button variant="success" 
                        onClick = {this.lockAnswer}
                        disabled={!this.state.answer}
                        className='qst-btn' >
                        Lock Answer
                        </Button>
    
                    <Link to ={url} >
                        <Button variant="success"
                            className='qst-btn'
                            onClick = { this.moveNext}
                            disabled={!this.state.next} >
                            {next}
                        </Button>    
                    </Link>
                     
    
            </div>
        )
    }


}

export default Questions;