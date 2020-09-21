//The company title
//-------------------------------
let theme_quest = {themeName:"Unknown"};
document.title = theme_quest.themeName;
//-------------------------------

let questPlace = document.querySelector("#quest");
let ansOne = document.querySelector("#ansOne");
let ansTwo = document.querySelector("#ansTwo");
let ansThree = document.querySelector("#ansThree");
let ansFour = document.querySelector("#ansFour");

let questions = [{
    question:"You're the best",
    answers:[
    {answerOne: "4fase",tf:"false"},
    {answerTwo: "ase",tf:"false"},
    {answerThree: "rue",tf:"false"},
    {answerFour: "alsx",tf:"true"}]
},{
    question:"you can deploy this",
    answers:[
    {answerOne: "3fase",tf:"true"},
    {answerTwo: "ase",tf:"false"},
    {answerThree: "rue",tf:"false"},
    {answerFour: "alsx",tf:"false"}]
},{
    question:"you're creative",
    answers:[
    {answerOne: "2fase",tf:"false"},
    {answerTwo: "ase",tf:"false"},
    {answerThree: "rue",tf:"true"},
    {answerFour: "alsx",tf:"false"}]
},{
    question:"you're the most powerfull of them all",
    answers:[
    {answerOne: "1fase",tf:"false"},
    {answerTwo: "ase",tf:"false"},
    {answerThree: "rue",tf:"true"},
    {answerFour: "alsx",tf:"false"}]
}]

nextQuest();
//--------------------------------------------------------
//Generate random question each time
function nextQuest(){
    RandQuest = Math.floor(Math.random()*questions.length);
    questPlace.innerHTML = questions[RandQuest].question;
    ansOne.innerHTML = questions[RandQuest].answers[0].answerOne;
    ansTwo.innerHTML = questions[RandQuest].answers[1].answerTwo;
    ansThree.innerHTML = questions[RandQuest].answers[2].answerThree;
    ansFour.innerHTML = questions[RandQuest].answers[3].answerFour;
    //questions.splice(RandQuest,1);
}
//---------------------------------------------------------


/*-------------------*/
/*--------Quit-------*/
/*-------------------*/
document.querySelector("#exit").addEventListener("click",exit);
function exit(){
    const answer = confirm("are you sure to quit ?");
    console.log(answer)
    if(answer){
        window.location.href ="./jobs.html"
    }
}
//--------------------------------------------

function ShowTruth(e){
    let choiceid = e.target.id;
    let chosen;
    //console.log(e.target.id)
    switch(choiceid){
        case "ansOne" : chosen = 0;break;
        case "ansTwo" : chosen = 1;break;
        case "ansThree" : chosen = 2;break;
        case "ansFour" : chosen = 3;break;
    }
    //console.log(questions[RandQuest].answers[chosen].tf)
    if(questions[RandQuest].answers[chosen].tf == "false"){
        e.target.style.background = "orange";
        e.target.style.color = "white";
        winorloose(0)
    }else{
        e.target.style.background = "green";
        e.target.style.color = "white";
        winorloose(1)
    }

}
let counter = document.querySelector("#counter");
counter.innerHTML = 0;
let lifes = document.querySelector("#lifes-counter");
lifes.innerHTML = 3;

/*----------------------------------*/
/*----------win or loose -----------*/
/*----------------------------------*/
function winorloose(knowledge){
    if(knowledge){
        //console.log("You're right");
        counter.innerHTML += 5;
        nextQuest();

    }else if(lifes.innerHTML > 0){
        //console.log("You lost a life");
        lifes.innerHTML -= 1;
    }else{
        alert("The graveyard is waiting ")
        exit()
    }

}