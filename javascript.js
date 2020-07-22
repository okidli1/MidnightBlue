var sportsQ = ["Florida’s Streamline Hotel is the birthplace of this auto racing organization.", "The maximum number of players on a soccer team."
, "The average lifespan of a baseball.", "The number of events in the 2020 Summer Olympics.", "Coach Pete Carroll’s gum of choice"]
var animalsQ = ["Reaching speeds of 200 miles per hour, this bird of prey is not only the world’s fastest, it is also the world’s fastest animal", "The heart of a shrimp is located here.", "The material a rhinoceros’ horn is made of", " Erythrocytes are your red blood cells & these are your white blood cells.", "The percentage of ice in Antarctic glaciers is made of penguin urine."]
var historyQ = ["On March 11, 2020, this was declared a pandemic.", "A French Queen famous for saying, “Let them eat cake!", "Operation Big Switch, involving the exchange of thousands of these people, was a key to the agreement ending the Korean War."
, "In legend, this real European leader fielded an elite corps called the 12 Peers that included Oliver and Roland.", "Thomas Jackson earned the nickname “Stonewall” at First A: Bull Run, called this by the Rebs."
]
var musicQ = ["The main instrument of Alicia Keys.", "In 2019, this trio of siblings had its first No. 1 song with “Sucker”"
, "In 2018, this R&B singer lived up to his (stage) name, becoming an EGOT, the first African American man to do so.", "In 2019, this 5-letter rap & R&B artist had the “Juice” to be nominated for Best New Artist at VMAs.", "Their adjacent home states gave country singers Brian Kelly & Tyler Hubbard this name for their country duo."]
var uPennCodingQ = ["The three “languages” used to create websites", "Elements used as containers for inline elements", " A named location for a value that gets stored in the browser’s memory when a program is run", "Order of GitHub commands", "Best camp part."]

var playerScore = 0

var Sports1 = ["Sports 1 Answer 1", "Sports 1 Answer 2", "What is NASCAR?", "Sports 1 Answer 4"]
var Sports2 = ["What is eleven?", "Sports 2 Answer 2", "Sports 2 Answer 3", "Sports 2 Answer 4"]
var Sports3 = ["Sports 3 Answer 1", "What is 7 pitches?", "Sports 3 Answer 3", "Sports 3 Answer 4"]
var Sports4 = ["Sports 4 Answer 1", "Sports 4 Answer 2", "Sports 4 Answer 3", "What is 339?"]
var Sports5 = ["Sports 5 Answer 1", "Sports 5 Answer 2", "Sports 5 Answer 3", "What is Bubble Yum?"]

var Animals1 = ["Animals What is the peregrine falcon?", "Animals 1 Answer 2", "Animals 1 Answer 3", "Animals 1 Answer 4"]
var Animals2 = ["Animals 2 Answer 1", "Animals 2 Answer 2", "What is its head?", "Animals 2 Answer 4"]
var Animals3 = ["Animals 3 Answer 1", "What is hair?", "Animals 3 Answer 3", "Animals 3 Answer 4"]
var Animals4 = ["What are leukocytes?", "Animals 4 Answer 2", "Animals 4 Answer 3", "Animals 4 Answer 4"]
var Animals5 = ["Animals 5 Answer 1", "Animals 5 Answer 2", "Animals 5 Answer 3", "What is nearly three percent?"]

var History1 = ["History 1 Answer 1", "What is COVID-19?", "History 1 Answer 3", "History 1 Answer 4"]
var History2 = ["History 2 Answer 1", "History 2 Answer 2", "History 2 Answer 3", "Who is Marie Antoinette?"]
var History3 = ["History 3 Answer 1", "History 3 Answer 2", "What are prisoners of war?", "History 3 Answer 4"]
var History4 = ["Who is Charlemagne?", "History 4 Answer 2", "History 4 Answer 3", "History 4 Answer 4"]
var History5 = ["History 5 Answer 1", "History 5 Answer 2", "History 5 Answer 3", "What is Manassas?"]

var Music1 = ["Music 1 Answer 1", "Music 1 Answer 2", "Music 1 Answer 3", "What is the piano?"]
var Music2 = ["Music 2 Answer 1", "Music 2 Answer 2", "Music 2 Answer 3", "Who are the Jonas Brothers?"]
var Music3 = ["Music 3 Answer 1", "Who is John Legend?", "Music 3 Answer 3", "Music 3 Answer 4"]
var Music4 = ["Who is Lizzo?", "Music 4 Answer 2", "Music 4 Answer 3", "Music 4 Answer 4"]
var Music5 = ["Music 5 Answer 1", "What is Florida Georgia Line?", "Music 5 Answer 3", "Music 5 Answer 4"]

var Coding1 = ["Coding 1 Answer 1", "Coding 1 Answer 2", "What is HTML, JavaScript, and CSS?", "Coding 1 Answer 4"]
var Coding2 = ["What are Block Elements?", "Coding 2 Answer 2", "Coding 2 Answer 3", "Coding 2 Answer 4"]
var Coding3 = ["Coding 3 Answer 1", "Coding 3 Answer 2", "What is a variable?", "Coding 3 Answer 4"]
var Coding4 = ["Coding 4 Answer 1", "Add, Commit, Push", "Coding 4 Answer 4", "Coding 4 Answer 4"]
var Coding5 = ["All of it", "Coding 5 Answer 2", "Coding 5 Answer 3", "Coding 5 Answer 4"]

var turnCounter = 0;
//Sport Buttons

$(document).ready(function(){
    $(".btn-choiceSport1").on("click",function() {
    if($(this).val()== 3){
       if(turnCounter % 2 == 0){
         player1Score +=100;
       }
      else{
         player2Score +=100
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=100;
       }
       else{
          player2Score -=100;
       }
       }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceSport2").on("click",function() {
    if($(this).val()== 1){
      if(turnCounter % 2 == 0){
         player1Score +=200;
       }
      else{
         player2Score +=200
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=200;
       }
       else{
          player2Score -=200;
       }
      }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceSport3").on("click",function() {
    if($(this).val()== 2){
      if(turnCounter % 2 == 0){
         player1Score +=300;
       }
      else{
         player2Score +=300
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=300;
       }
       else{
          player2Score -=300;
       }
      }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceSport4").on("click",function() {
    if($(this).val()== 4){
      if(turnCounter % 2 == 0){
         player1Score +=400;
       }
      else{
         player2Score +=400
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=400;
       }
       else{
          player2Score -=400;
       }
      }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceSport5").on("click",function() {
    if($(this).val()== 4){
      if(turnCounter % 2 == 0){
         player1Score +=500;
       }
      else{
         player2Score +=500
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=500;
       }
       else{
          player2Score -=500;
       }
      }
    });   
   });

//Animal Buttons

$(document).ready(function(){
 $(".btn-choiceAnimal1").on("click",function() {
 if($(this).val()== 1){
   if(turnCounter % 2 == 0){
      player1Score +=100;
    }
   else{
      player2Score +=100
   }    
 }
 else{
    if(turnCounter % 2 == 0){
     player1score -=100;
    }
    else{
       player2Score -=100;
    }
   }
 });   
});

$(document).ready(function(){
    $(".btn-choiceAnimal2").on("click",function() {
    if($(this).val()== 3){
      if(turnCounter % 2 == 0){
         player1Score +=200;
       }
      else{
         player2Score +=200
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=200;
       }
       else{
          player2Score -=200;
       }
      }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceAnimal3").on("click",function() {
    if($(this).val()== 2){
      if(turnCounter % 2 == 0){
         player1Score +=300;
       }
      else{
         player2Score +=300
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=300;
       }
       else{
          player2Score -=300;
       }
      }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceAnimal4").on("click",function() {
    if($(this).val()== 1){
      if(turnCounter % 2 == 0){
         player1Score +=400;
       }
      else{
         player2Score +=400
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=400;
       }
       else{
          player2Score -=400;
       }
      }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceAnimal5").on("click",function() {
    if($(this).val()== 4){
      if(turnCounter % 2 == 0){
         player1Score +=500;
       }
      else{
         player2Score +=500
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=500;
       }
       else{
          player2Score -=500;
       }
      }
    });   
   });

   //History Buttons

   $(document).ready(function(){
    $(".btn-choiceHistory1").on("click",function() {
    if($(this).val()== 2){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });
   $(document).ready(function(){
    $(".btn-choiceHistory2").on("click",function() {
    if($(this).val()== 4){
       playerScore +=200;    
    }
    else{
        playerscore -=200;
       }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceHistory3").on("click",function() {
    if($(this).val()== 3){
      if(turnCounter % 2 == 0){
         player1Score +=300;
       }
      else{
         player2Score +=300
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=300;
       }
       else{
          player2Score -=300;
       }
      }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceHistory4").on("click",function() {
    if($(this).val()== 1){
      if(turnCounter % 2 == 0){
         player1Score +=400;
       }
      else{
         player2Score +=400
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=400;
       }
       else{
          player2Score -=400;
       }
      }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceHistory5").on("click",function() {
    if($(this).val()== 4){
      if(turnCounter % 2 == 0){
         player1Score +=500;
       }
      else{
         player2Score +=500
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=500;
       }
       else{
          player2Score -=500;
       }
      }
    });   
   });

   //Music Buttons

   $(document).ready(function(){
    $(".btn-choiceMusic1").on("click",function() {
    if($(this).val()== 4){
      if(turnCounter % 2 == 0){
         player1Score +=100;
       }
      else{
         player2Score +=100
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=100;
       }
       else{
          player2Score -=100;
       }
      }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceMusic2").on("click",function() {
    if($(this).val()== 4){
      if(turnCounter % 2 == 0){
         player1Score +=200;
       }
      else{
         player2Score +=200
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=200;
       }
       else{
          player2Score -=200;
       }
      }
    });   
   }); 

   $(document).ready(function(){
    $(".btn-choiceMusic3").on("click",function() {
    if($(this).val()== 2){
      if(turnCounter % 2 == 0){
         player1Score +=300;
       }
      else{
         player2Score +=300
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=300;
       }
       else{
          player2Score -=300;
       }
      }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceMusic4").on("click",function() {
    if($(this).val()== 1){
      if(turnCounter % 2 == 0){
         player1Score +=400;
       }
      else{
         player2Score +=400
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=400;
       }
       else{
          player2Score -=400;
       }
      }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceMusic5").on("click",function() {
    if($(this).val()== 2){
      if(turnCounter % 2 == 0){
         player1Score +=500;
       }
      else{
         player2Score +=500
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=500;
       }
       else{
          player2Score -=500;
       }
      }
    });   
   });
   
   //Coding Buttons
   $(document).ready(function(){
    $(".btn-choiceCoding1").on("click",function() {
    if($(this).val()== 3){
      if(turnCounter % 2 == 0){
         player1Score +=100;
       }
      else{
         player2Score +=100
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=100;
       }
       else{
          player2Score -=100;
       }
      }
    });   
   }); 

   $(document).ready(function(){
    $(".btn-choiceMusic2").on("click",function() {
    if($(this).val()== 1){
      if(turnCounter % 2 == 0){
         player1Score +=200;
       }
      else{
         player2Score +=200
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=200;
       }
       else{
          player2Score -=200;
       }
      }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceMusic3").on("click",function() {
    if($(this).val()== 3){
      if(turnCounter % 2 == 0){
         player1Score +=300;
       }
      else{
         player2Score +=300
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=300;
       }
       else{
          player2Score -=300;
       }
      }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceMusic4").on("click",function() {
    if($(this).val()== 2){
      if(turnCounter % 2 == 0){
         player1Score +=400;
       }
      else{
         player2Score +=400
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=400;
       }
       else{
          player2Score -=400;
       }
      }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceMusic5").on("click",function() {
    if($(this).val()== 1){
      if(turnCounter % 2 == 0){
         player1Score +=500;
       }
      else{
         player2Score +=500
      }    
    }
    else{
       if(turnCounter % 2 == 0){
        player1score -=500;
       }
       else{
          player2Score -=500;
       }
      }
    });   
   });