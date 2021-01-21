var readlineSync = require('readline-sync');

var score = 0;
var name = readlineSync.question("What's your name?");

highscores = [{
  Name : "Ishan",
  Score: 10  
},
  {Name : "Name2",
  Score: 2,
}
];

console.log("Welcome, ", name, "\n", "Let's play Who knows Ishan better...\n");

function play(question, answer){
  currentAnswer = readlineSync.question(question);


  if(currentAnswer.toUpperCase()===answer.toUpperCase()){
  score +=1;
  console.log("You are right!");
  }else{
  console.log("you are wrong!");
}
console.log("Your score is: ", score)
console.log("===============")

}


var QnAs = [{
  question: "Am I older than 25? ",
  answer: "yes" 
},
{
  question: "Where do I live? ",
  answer: "Delhi" 
}];


for(var i =0; i<QnAs.length; i++)
{
  play(QnAs[i].question, QnAs[i].answer)
}

console.log("Your final score is=> ", score, "\n")
console.log("highscores=>")
for(var i=0; i<highscores.length; i++){
  console.log(highscores[i].Name, " : ", highscores[i].Score)
}
console.log("\nif you have beaten the score, then claim a position in scoreboard by taking a screenshot of your score and send it to me!!")
