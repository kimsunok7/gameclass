import React, { Component } from 'react'
import Box from './component/Box'
import "./App.css"

const choice = {
    rock: {
      name: "Rock",
      img: "img/rock.jpg",
    },
    scissors: {
      name: "Scissors",
      img: "img/si.jpg",
    },
    paper: {
      name: "Paper",
      img: "img/bo.jpg",
    },
    default:{
      name : "aa",
      img : "https://t1.daumcdn.net/cfile/tistory/9952FF4F5E0EED152C"
    }
  };

export default class AppClass extends Component {
    constructor() {
        super();
        this.state = {
            userSelect :choice.default,
            computerSelect : choice.default,
            result :"",
        }
    }

     play = (userChoice)=> {
// console.log("클릭", userChoice)
let computerChoice = this.randomChoice();
        this.setState({userSelect : choice[userChoice],
            computerSelect : computerChoice,
            result : this.judgement(choice[userChoice], computerChoice)
        })
// console.log("이미지", choice[userChoice])
     
    }
  


    randomChoice = () =>{
        let itemArray = Object.keys(choice);
    // console.log("itemArray", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    // console.log("random value", randomItem);
    let final = itemArray[randomItem];
    // console.log("final", final);
    return choice[final];
    }

    judgement = (user, computer) => {
        // console.log("user", user, "computer", computer);
        if (user.name == computer.name) {
          return "tie";
        } else if (user.name == "Rock") {
          return computer.name == "Scissors" ? "win" : "lose";
        } else if (user.name == "Paper") {
          return computer.name == "Rock" ? "win" : "lose";
        } else if (user.name == "Scissors") {
          return computer.name == "Paper" ? "win" : "lose";
        }
      };
  render() {
    return (
      <div className = 'wrap'>
        <h3>가위바위보 게임</h3>
        <div className = "main">
            <Box title="You" item={this.state.userSelect} result={this.state.result} ></Box>
            <Box title="Computer" item={this.state.computerSelect} result={this.state.result}></Box>
        </div>
        <img src={process.env.PUBLIC_URL + "img/si.jpg"} onClick={()=> this.play("scissors")}></img>
        <img src={process.env.PUBLIC_URL + "img/rock.jpg"} onClick = {()=> this.play("rock")}></img>
        <img src={process.env.PUBLIC_URL + "img/bo.jpg"} onClick= {() => this.play("paper")}></img>
      </div>
    )
  }
}
