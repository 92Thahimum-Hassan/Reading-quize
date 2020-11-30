import React from 'react';
import './index.css';
import {  Link } from "react-router-dom";
import  firebase from './config/firebaseConfig.js';

function next_click() {
    var choice = true
    if (choice == true) {
        var x = document.getElementById("article_div");
        x.style.display = "none";
        var y = document.getElementById("quiz_div");
        if (y.style.visibility = "hidden") {
            y.style.visibility = "visible";
        }
    }
}

class Quize extends React.Component{
    
constructor(props){
    super(props);

    this.state = {
        visible: true,
        score:" ",
        startdate:" "
    };

   this.reading = e =>{
        //    e.preventDefault();
           const db = firebase.firestore();
    
          // eslint-disable-next-line 
           db.collection("reading").add({
               score:this.state.score,
               startdate:this.state.startdate    
    
           });
           this.setState({
            startdate:" ",
            score:" "
        });
    
       }
    } 
  componentDidMount() {
    // eslint-disable-next-line 
     var that = this;
     var date = new Date().getDate();
     var month = new Date().getMonth() + 1; //Current Month
     var year = new Date().getFullYear(); //Current Year
     var hours = new Date().getHours(); //Current Hours
     var min = new Date().getMinutes(); //Current Minutes
     var sec = new Date().getSeconds(); //Current Seconds
     that.setState({
       //Setting the value of the date time
       startdate:
         date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
     });

    
     
   }

    render()
    {
        return(
           
            <div id="quiz_div" name="quiz">
            <h1 id="Sample_quiz_heading">Quiz</h1>
            <p>How many AI trends did the article have</p>
            <select id="q1" name="q1">
                <option value="null1">Please select an option</option>
                <option value="q1_a1">1</option>
                <option value="q1_a2">2</option>
                <option value="q1_a3">3</option>
                <option value="q1_a4">4</option>
            </select>
            <p>Which one of the following did the article not talk about</p>
            <select id="q2" name="q2">
                <option value="null2">Please select an option</option>
                <option value="q2_a1">AI and human cooperation</option>
                <option value="q2_a2">AI used in vacuum cleaners</option>
                <option value="q2_a3">Create films, music and games</option>
                <option value="q2_a4">Monitoring and refining business</option>
            </select>
            <p>Which actor was de-aged using AI</p>
            <select id="q3" name="q3">
                <option value="null3">Please select an option</option>
                <option value="q3_a1">Jesse Eisenberg</option>
                <option value="q3_a2">Morgan Freeman</option>
                <option value="q3_a3">Andrew Garfield</option>
                <option value="q4_a4">Robert De Niro</option>
            </select>
            <p>Did the article talk about automating manufacturing and production lines</p>
            <select id="q4" name="q4">
                <option value="null4">Please select an option</option>
                <option value="q4_a1">Yes</option>
                <option value="q4_a2">No</option>
                <option value="q4_a3">Maybe</option>
                <option value="q4_a4">No idea!</option>
            </select>
            <br></br>
            <button id="fin" type="button" value="Submit" onClick={this.validate} >Submit</button>
            <Link to="/quize_result">
                <button id="next_button" >Submit</button></Link>
          
       </div>       
        ); 
        
    }    
}


export default Quize;