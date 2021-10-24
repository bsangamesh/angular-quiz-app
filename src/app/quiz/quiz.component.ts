import { Component, OnInit } from '@angular/core';
import questions from "../../assets/questions.json";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questionsData : any;
  answers : any[];
  selectedAnswers : any[];
  res : number;

  constructor() {
    this.questionsData = questions;
    this.selectedAnswers = [];
    this.answers = [];
    this.res = 0;
   }

  ngOnInit(): void {
    this.fillActualAnswerArray();
  }

  optionSelected(option){
    this.selectedAnswers.push(option);
  }

  printSelectedAnswers(){
    this.selectedAnswers.forEach(element => {
        console.log(element)
    });
  }

  fillActualAnswerArray(){
    for(let question of this.questionsData.questions){
       this.answers.push(question.answers[question.correctIndex]);
     }
  }

  printAnswers(){
    console.log("actual answers")
    this.answers.forEach(element => {
        console.log(element)
    });
  }

  compareAnswers(){
    
    for(let answer of this.selectedAnswers){
      if(this.answers.includes(answer)){
        this.res++;
      }
    }
    console.log('Total Questions -> ', this.questionsData.questions.length)
    console.log('Correct answer Count -> ', this.res)

    if( this.res === 0){
      console.log("Please select some answers")
      return;
    }
    if(this.questionsData.questions.length === this.res){
      console.log("You've cleared the Quiz")
    }else{
      console.log("Try Again!!")
    }

    this.res = 0;
  }

  

}
