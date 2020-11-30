import React, { Component } from 'react';
import './index.css';
import {  Link } from "react-router-dom";
import  firebase from './config/firebaseConfig.js';

// function next_click() {
//     var choice = true
//     if (choice == true) {
//         var x = document.getElementById("article_div");
//         x.style.display = "none";
//         var y = document.getElementById("quiz_div");
//         if (y.style.visibility = "hidden") {
//             y.style.visibility = "visible";
//         }
//     }
// }

class Reading extends React.Component {
    main_score =0;
    constructor() {
      super(); 
    this.state = {
        visible: true,
        startdate:" ",
        score: 0,
        // correct_score:" "
    };

    this.reading = e =>{
        //    e.preventDefault();
           const db = firebase.firestore();
    
          // eslint-disable-next-line 
           db.collection("reading").add({
               score:this.state.score,
               startdate:this.state.startdate         
    
           })  .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

       };
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


    console.log("corrected_score "+this.correct_score)
    // var q1 = document.quiz.q1.value
    // var q2 = document.quiz.q2.value
    // var q3 = document.quiz.q3.value
    // var q4 = document.quiz.q4.value
    // var q1_bool = false
    // var q2_bool = false
    // var q3_bool = false
    // var q4_bool = false
    // var correct_score =0
    // console.log("q2 "+q2)
    // console.log("q4 "+q4)

    // if (q1 == "q1_a3") {
    //     q1_bool = true
    //     correct_score++
    // }
    // if (q2 == "q2_a2") {
    //     q2_bool = true
    //     correct_score++
    // }
    // if (q3 == "q3_a4") {
    //     q3_bool = true
    //     correct_score++
    // }
    // if (q4 == "q4_a1") {
    //     q4_bool = true
    //     correct_score++
    // }
    // console.log("correc_score "+correct_score)
     that.setState({
       //Setting the value of the date time
       startdate:
         date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
       score: 
         this.main_score + '/4',
       
     });
   
   }
   
     
 

   render() {
    return (
        <div id="body">
        <div id="article_div">
            <div id="hide_reading_portion">
            <h2>Top AI trends to look out for in 2020</h2>
            <p>
                <h3>AI increasingly used to create films, music, and games</h3>
                Some things, even in 2020, are probably still best left to humans. Anyone who has seen the current
                state-of-the-art in AI-generated music, poetry or storytelling is likely to agree that the most sophisticated
                machines still have some way to go until their output will be as enjoyable to us as the best that humans can
                produce. However, the influence of AI on entertainment media is likely to increase. This year we saw Robert De
                Niro de-aged in front of our eyes with the assistance of AI, in Martin Scorsese’s epic The Irishman, and the
                use of AI in creating brand new visual effects and trickery is likely to become increasingly common.

                In videogames, AI will continue to be used to create challenging, human-like opponents for players to compete
                against, as well as to dynamically adjust gameplay and difficulty so that games can continue to offer a
                compelling challenge for gamers of all skill levels. And while completely AI-generated music may not be
                everyone’s cup of tea, where AI does excel is in creating dynamic soundscapes – think of smart playlists on
                services like Spotify or Google Music that match tunes and tempo to the mood and pace of our everyday lives.
            </p>
            <p>
                <h3>AI will increasingly be monitoring and refining business processes</h3>
                While the first robots in the workplace were mainly involved with automating manual tasks such as
                manufacturing and production lines, today's software-based robots will take on the repetitive but necessary
                work that we carry out on computers. Filling in forms, generating reports and diagrams and producing
                documentation and instructions are all tasks that can be automated by machines that watch what we do and learn
                to do it for us in a quicker and more streamlined manner. This automation – known as robotic process
                automation – will free us from the drudgery of time-consuming but essential administrative work, leaving us to
                spend more time on complex, strategic, creative and interpersonal tasks.
            </p>
            <p>
                <h3>Human and AI cooperation increases</h3>
                More and more of us will get used to the idea of working alongside AI-powered tools and bots in our day-to-day
                working lives. Increasingly, tools will be built that allow us to make the most of our human skills – those
                which AI can't quite manage yet – such as imaginative, design, strategy, and communication skills. While
                augmenting them with super-fast analytics abilities fed by vast datasets that are updated in real-time.

                For many of us, this will mean learning new skills, or at least new ways to use our skills alongside these new
                robotic and software-based tools. The IDC predicts that by 2025, 75% of organizations will be investing in
                employee retraining in order to fill skill gaps caused by the need to adopt AI. This trend will become
                increasingly apparent throughout 2020, to the point where if your employer isn’t investing in AI tools and
                training, it might be worth considering how well placed they are to grow over the coming years.
            </p>
            <h3>Source</h3>
            <p>
                Marr, Bernard. “The Top 10 Artificial Intelligence Trends Everyone Should Be Watching In 2020.” Forbes, Forbes
                Magazine, 6 Jan. 2020,
                www.forbes.com/sites/bernardmarr/2020/01/06/the-top-10-artificial-intelligence-trends-everyone-should-be-watching-in-2020/.
            </p>
            <button id="next_button" onClick={this.hide}>Go to Quiz</button>
            </div>
            <div id="quiz_div">
                <form id="quiz" name="quiz">
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
                        <option value="q3_a4">Robert De Niro</option>
                    </select>
                    <p>Did the article talk about automating manufacturing and production lines</p>
                    <select id="q4" name="q4">
                        <option value="null4">Please select an option</option>
                        <option value="q4_a1">Yes</option>
                        <option value="q4_a2">No</option>
                        <option value="q4_a3">Maybe</option>
                        <option value="q4_a4">No idea!</option>
                    </select>
                    <p></p>
                    <button id="fin" type="button" value="Submit" onClick={this.validate}>Submit</button>
                </form>
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
                    <button id="fin" type="submit" onClick={this.reading}>Done</button>
                </div>
               
            </div>
        </div>
        </div>
      

    );
    
}


hide() {
var choice = true
if (choice == true) {
    var x = document.getElementById("hide_reading_portion");
    x.style.display = "none";
    var y = document.getElementById("quiz_div");
    y.style.visibility = "visible";
}
}


validate() {
// this.hide_quiz

var x = document.getElementById("quiz");
x.style.display = "none";
var y = document.getElementById("quiz_results")
y.style.visibility = "visible";

var q1 = document.quiz.q1.value
var q2 = document.quiz.q2.value
var q3 = document.quiz.q3.value
var q4 = document.quiz.q4.value
var q1_bool = false
var q2_bool = false
var q3_bool = false
var q4_bool = false
var correct_score = 0
if (q1 == "q1_a3") {
    q1_bool = true
    correct_score++
}
if (q2 == "q2_a2") {
    q2_bool = true
    correct_score++
}
if (q3 == "q3_a4") {
    q3_bool = true
    correct_score++
}
if (q4 == "q4_a1") {
    q4_bool = true
    correct_score++
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

// document.getElementById("score").innerHTML=correct_score=this.state.score
// this.setState({main_score : correct_score})

document.getElementById("tot_score").innerHTML = "Total score: " +  correct_score +"/4"
if (inc_q == 1) {
    document.getElementById("inc_qs").innerHTML = "Correct Answer is displayed below";
} else if (inc_q > 1) {
    document.getElementById("inc_qs").innerHTML = "Correct Answers are displayed below";
}

}
}
//  hide_quiz() {
// var x = document.getElementById("quiz");
// x.style.display = "none";
// var y = document.getElementById("quiz_results")
// y.style.visibility = "visible";
// }


export default Reading;
