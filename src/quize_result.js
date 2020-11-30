import React from 'react';
import './index.css';
import  firebase from './config/firebaseConfig.js';
import Quize from './quize'; 


class Quize_Result extends React.Component{
    
  
    
        state = {
            visible: true,
            score:0,
            startdate:" "
        };
    
       reading = e =>{
            //    e.preventDefault();
               const db = firebase.firestore();
        
              // eslint-disable-next-line 
               db.collection("reading").add({
                   score:this.state.score,
                   startdate:this.state.startdate    
        
               })
               .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });

               this.setState({
                startdate:" ",
                score:" "
                
            });
        
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
     
         this.state.score++;
         
        
         
       }
        render(){
            return(
                <div>
                    <button onClick={validate()}>Show the Results</button>
                

                    <div id="quiz_results">
                    <h1 id="heading"></h1>
                    <h3 id="q1_check"></h3>
                    <h3 id="q2_check"></h3>
                    <h3 id="q3_check"></h3>
                    <h3 id="q4_check"></h3>
                    <h3 id="tot_score"></h3>
                    <h2 id="inc_qs"></h2>
                    <h4 id="q_no1"></h4>
                    <p id="d_q1"></p>
                    <p id="a_q1"></p>
                    <h4 id="q_no2"></h4>
                    <p id="d_q2"></p>
                    <p id="a_q2"></p>
                    <h4 id="q_no3"></h4>
                    <p id="d_q3"></p>
                    <p id="a_q3"></p>
                    <h4 id="q_no4"></h4>
                    <p id="d_q4"></p>
                    <p id="a_q4"></p>

                 {/* <button id="fin" onClick={this.reading}>Done</button> */}
                 </div> 
                 </div> 

    );
 

                   
}
}      
function hide_quiz() {
    var x = document.getElementById("quiz");
     x.style.display = "none";
    var y = document.getElementById("quiz_results")
     y.style.visibility = "visible";
    }   
function validate() {
    hide_quiz()   
    var q1 = document.quiz.q1.value
    var q2 = document.quiz.q2.value
    var q3 = document.quiz.q3.value
    var q4 = document.quiz.q4.value
    var q1_bool = false
    var q2_bool = false
    var q3_bool = false
    var q4_bool = false
    this.state.score = 0
    if (q1 == "q1_a3") {
        q1_bool = true
        this.state.score++
    }
    if (q2 == "q2_a2") {
        q2_bool = true
        this.state.score++
    }
    if (q3 == "q3_a4") {
        q3_bool = true
        this.state.score++
    }
    if (q4 == "q4_a1") {
        q4_bool = true
        this.state.score++
    }
    var inc_q = 0
    document.getElementById("heading").innerHTML = "Results";
    if (q1_bool == true) {
        document.getElementById("q1_check").innerHTML = "Question 1: Correct";
    } else {
        document.getElementById("q1_check").innerHTML = "Question 1: Incorrect";
        document.getElementById("d_q1").innerHTML = "How many AI trends did the article have?";
        document.getElementById("a_q1").innerHTML = "Correct choice: 3";
        document.getElementById("q_no1").innerHTML = "Question 1";
        inc_q++;
    }
    if (q2_bool == true) {
        document.getElementById("q2_check").innerHTML = "Question 2: Correct";
    } else {
        document.getElementById("q2_check").innerHTML = "Question 2: Incorrect";
        document.getElementById("d_q2").innerHTML = "Which one of the following did the article not talk about?";
        document.getElementById("a_q2").innerHTML = "Correct choice: AI used in vacuum cleaners";
        document.getElementById("q_no2").innerHTML = "Question 2";
        inc_q++;
    }
    if (q3_bool == true) {
        document.getElementById("q3_check").innerHTML = "Question 3: Correct";
    } else {
        document.getElementById("q3_check").innerHTML = "Question 3: Incorrect";
        document.getElementById("d_q3").innerHTML = "Which actor was de-aged using AI?";
        document.getElementById("a_q3").innerHTML = "Correct choice: Robert De Niro";
        document.getElementById("q_no3").innerHTML = "Question 3";
        inc_q++;
    }
    if (q4_bool == true) {
        document.getElementById("q4_check").innerHTML = "Question 4: Correct";
    } else {
        document.getElementById("q4_check").innerHTML = "Question 4: Incorrect";
        document.getElementById("d_q4").innerHTML = "Did the article talk about automating manufacturing and production lines?";
        document.getElementById("a_q4").innerHTML = "Correct choice: Yes";
        document.getElementById("q_no4").innerHTML = "Question 4";
        inc_q++;
    }
    document.getElementById("tot_score").innerHTML = "Total score: " +  this.state.score +"/4";
    if (inc_q == 1) {
        document.getElementById("inc_qs").innerHTML = "Correct Answer is displayed below";
    } else if (inc_q > 1) {
        document.getElementById("inc_qs").innerHTML = "Correct Answers are displayed below";
    }
    // this.reading;
}
                
    
export default Quize_Result;