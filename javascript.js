var turnCounter = 0;
$(document).ready(function () {
var sportsQ = ["Florida’s Streamline Hotel is the birthplace of this auto racing organization.", "The maximum number of players on a soccer team.", "The average lifespan of a baseball.", "The number of events in the 2020 Summer Olympics.", "Coach Pete Carroll’s gum of choice"]
var animalsQ = ["Reaching speeds of 200 miles per hour, this bird of prey is not only the world’s fastest, it is also the world’s fastest animal", "The heart of a shrimp is located here.", "The material a rhinoceros’ horn is made of", " Erythrocytes are your red blood cells & these are your white blood cells.", "The percentage of ice in Antarctic glaciers is made of penguin urine."]
var historyQ = ["On March 11, 2020, this was declared a pandemic.", "A French Queen famous for saying, “Let them eat cake!", "Operation Big Switch, involving the exchange of thousands of these people, was a key to the agreement ending the Korean War.", "In legend, this real European leader fielded an elite corps called the 12 Peers that included Oliver and Roland.", "Thomas Jackson earned the nickname “Stonewall” at First A: Bull Run, called this by the Rebs."]
var musicQ = ["The main instrument of Alicia Keys.", "In 2019, this trio of siblings had its first No. 1 song with “Sucker”", "In 2018, this R&B singer lived up to his (stage) name, becoming an EGOT, the first African American man to do so.", "In 2019, this 5-letter rap & R&B artist had the “Juice” to be nominated for Best New Artist at VMAs.", "Their adjacent home states gave country singers Brian Kelly & Tyler Hubbard this name for their country duo."]
var uPennCodingQ = ["The three “languages” used to create websites", "Elements used as containers for inline elements", " A named location for a value that gets stored in the browser’s memory when a program is run", "Order of GitHub commands", "Best camp part."]

var SportsAnswers = [["What is Sports Car Club of America", "What is the National Auto Sport Association?", "What is NASCAR?", "What is Formula 1?"], ["What is 11?", "What is 50?", "What is one?", "What is 30?"], ["What is 10 pitches?", "What is 7 pitches?", "What is 100 pitches?", "What is 3 pitches?"], ["What is 279?", "What is 436?", "What is 327?", "What is 339?"], ["What is Bazooka?", "What is Juicy Fruit?", "What is Dubble Bubble?", "What is Bubble Yum?"]]

var AnimalsAnswers = [["What is the peregrine falcon?", "What is the bald eagle?", "What is the Golden eagle?", "What is the Ostrich?"], ["What is its abdomen?", "What is its cephalothorax?", "What is its head?", "What is its antenna?"], ["What is bone?", "What is hair?", "What is ivory?", "What is stone?"], ["What are leukocytes?", "What are platelets?", "What are thrombocytes?", "What are lymphocytes?"], ["What is 100%?", "What is nearly 2%?", "What is nearly 6%?", "What is nearly 3%?"]]

var HistoryAnswers = [["What is influenza?", "What is COVID-19?", "What is HIV/AIDS?", "What is the flu?"], ["Who is Eleanor of Aquitaine?", "Who is Anne of Austria?", "Who is Mary Queen of Scots?", "Who is Marie Antoinette?"], ["What are weapons of war?", "What are boy bands?", "What are prisoners of war?", "What are soldiers?"], ["Who is Charlemagne?", "Who is Napoleon?", "Who is Carloman I?", "Who is Louis the Pious?"], ["What is Prince William County?", "What is Salam?", "What is Concord?", "What is Manassas?"]]

var MusicAnswers = [["What is the tambourine?", "What is the guitar?", "What is the piano?", "What are the drums?"], ["What are the Beatles?", "What are the Doobie Brothers?", "What is NSYNC?", "Who are the Jonas Brothers?"], ["Who is Marvin Gaye?", "Who is John Legend?", "Who is Stevie Wonder?", "Who is Smokey Robinson"], ["Who is Lizzo?", "Who is Akala?", "Who is Yubin?", "Who is Kelis?"], ["What is Florida Arizona Line?", "What is Florida Georgia Line?", " What is Texas Louisiana Line?", "What is Maine California Line?"]]

var CodingAnswers = [["What is Bootstrap, HTML, and CSS?", "What is jQuery, JavaScript, and Bootstrap?", "What is HTML, JavaScript, and CSS?", "What is HTML, CSS, and Chinese?"], ["What are Block Elements?", "What are Input Elements?", "What are Output Elements?", "What are Looping Elements?"], ["What is a console?", "What is a string?", "What is a variable?", "What is an integer?"], ["Add, Push, Commit", "Add, Commit, Push", "Commit, Add, Push", "Push, Commit, Add"], ["All of it", "None of it.", "Meeting new people", "The interactive instructors."]]


var question = ""
var a1 = ""
var a2 = ""
var a3 = ""
var a4 = ""
var buttons = document.getElementsByClassName("btn-block");
var buttonAnswers = document.getElementsByClassName("btn btn-primary btnAnswer")
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", setTimerFunction, false);
        }
        
        function setTimerFunction(){
            var timer = setTimeout(buzzer, 10000);
        };
        function buzzer() {
            var modal = $("#exampleModal");
            if (modal.hasClass("show")) {
                modal.removeClass("show");
                alert("Time has run out!");
                turnCounter++
            }
        }
         function myStopFunction() {
           clearTimeout(timer);
        }
$(".btn-block").on("click", function () {
      var button = this.id;
      var number = parseInt(button[0])
      if (button[4] == "a") {
         question = animalsQ[number - 1]
         answers = AnimalsAnswers[number - 1]
         a1 = answers[0]
         a2 = answers[1]
         a3 = answers[2]
         a4 = answers[3]
      }
      if (button[4] == "s") {
         question = sportsQ[number - 1]
         answers = SportsAnswers[number - 1]
         a1 = answers[0]
         a2 = answers[1]
         a3 = answers[2]
         a4 = answers[3]
      }
      if (button[4] == "h") {
         question = historyQ[number - 1]
         answers = HistoryAnswers[number - 1]
         a1 = answers[0]
         a2 = answers[1]
         a3 = answers[2]
         a4 = answers[3]
      }
      if (button[4] == "m") {
         question = musicQ[number - 1]
         answers = MusicAnswers[number - 1]
         a1 = answers[0]
         a2 = answers[1]
         a3 = answers[2]
         a4 = answers[3]
      }
      if (button[4] == "c") {
         question = uPennCodingQ[number - 1]
         answers = CodingAnswers[number - 1]
         a1 = answers[0]
         a2 = answers[1]
         a3 = answers[2]
         a4 = answers[3]
      }
document.getElementById("ModalLabel").innerHTML = (number * 100).toString();
document.getElementById("question").innerHTML = question;
document.getElementById("answer1").innerHTML = a1;
document.getElementById("answer2").innerHTML = a2;
document.getElementById("answer3").innerHTML = a3;
document.getElementById("answer4").innerHTML = a4;
this.innerHTML = "";
}); //on function

}); //ready function
var player1Score = 0;
var player2Score = 0;

$(document).ready(function(){
   $(".btnAnswer").on("click",function() {
      var correct = ["What is NASCAR?", "What is 11?", "What is 7 pitches?", "What is 339?", "What is Bubble Yum?", "What is the peregrine falcon?", "What is its head?", "What is hair?", "What is leukocytes?", "What is nearly 3%?", "What is COVID-19?", "Who is Marie Antoinette?",  "What are prisoners of war?", "Who is Charlemagne?", "What is Manassas?", "What is the piano?", "Who are the Jonas Brothers?", "Who is John Legend?", "Who is Lizzo?",  "What is Florida Georgia Line?",   "What is HTML, JavaScript, and CSS?", "What are Block Elements?", "What is a variable?", "Add, Commit, Push", "All of it"]
      var correctGuess = false;
      for(var i = 0; i < correct.length; i++){
         if(this.textContent == correct[i]){
            if(turnCounter % 2 == 0){
               player1Score += Number(document.getElementById("ModalLabel").textContent);
               $(".p1Score").text(player1Score);
               turnCounter++;
              
            }
            else{
               player2Score += Number(document.getElementById("ModalLabel").textContent);
               $(".p2Score").text(player2Score);
               turnCounter++;
              
            }
            correctGuess = true;
            break;
         }
      }
      if(!correctGuess){
         if(turnCounter % 2 == 0){
            player1Score -= Number(document.getElementById("ModalLabel").textContent);
            $(".p1Score").text(player1Score);
            turnCounter++
         }
         else{
            player2Score -= Number(document.getElementById("ModalLabel").textContent);
            $(".p2Score").text(player2Score);
            turnCounter++
      }

   }
   });
});




    