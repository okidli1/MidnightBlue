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

var Sports1 = ["Sports 1 Answer 1", "Sports 1 Answer 2", "Sports 1 Answer 3", "Sports 1 Answer 4"]
var Sports2 = ["Sports 2 Answer 1", "Sports 2 Answer 2", "Sports 2 Answer 3", "Sports 2 Answer 4"]
var Sports3 = ["Sports 3 Answer 1", "Sports 3 Answer 2", "Sports 3 Answer 3", "Sports 3 Answer 4"]
var Sports4 = ["Sports 4 Answer 1", "Sports 4 Answer 2", "Sports 4 Answer 3", "Sports 4 Answer 4"]
var Sports5 = ["Sports 5 Answer 1", "Sports 5 Answer 2", "Sports 5 Answer 3", "Sports 5 Answer 4"]

var Animals1 = ["Animals 1 Answer 1", "Animals 1 Answer 2", "Animals 1 Answer 3", "Animals 1 Answer 4"]
var Animals2 = ["Animals 2 Answer 1", "Animals 2 Answer 2", "Animals 2 Answer 3", "Animals 2 Answer 4"]
var Animals3 = ["Animals 3 Answer 1", "Animals 3 Answer 2", "Animals 3 Answer 3", "Animals 3 Answer 4"]
var Animals4 = ["Animals 4 Answer 1", "Animals 4 Answer 2", "Animals 4 Answer 3", "Animals 4 Answer 4"]
var Animals5 = ["Animals 5 Answer 1", "Animals 5 Answer 2", "Animals 5 Answer 3", "Animals 5 Answer 4"]

var History1 = ["History 1 Answer 1", "History 1 Answer 2", "History 1 Answer 3", "History 1 Answer 4"]
var History2 = ["History 2 Answer 1", "History 2 Answer 2", "History 2 Answer 3", "History 2 Answer 4"]
var History3 = ["History 3 Answer 1", "History 3 Answer 2", "History 3 Answer 3", "History 3 Answer 4"]
var History4 = ["History 4 Answer 1", "History 4 Answer 2", "History 4 Answer 3", "History 4 Answer 4"]
var History5 = ["History 5 Answer 1", "History 5 Answer 2", "History 5 Answer 3", "History 5 Answer 4"]

var Music1 = ["Music 1 Answer 1", "Music 1 Answer 2", "Music 1 Answer 3", "Music 1 Answer 4"]
var Music2 = ["Music 2 Answer 1", "Music 2 Answer 2", "Music 2 Answer 3", "Music 2 Answer 4"]
var Music3 = ["Music 3 Answer 1", "Music 3 Answer 3", "Music 3 Answer 3", "Music 3 Answer 4"]
var Music4 = ["Music 4 Answer 1", "Music 4 Answer 2", "Music 4 Answer 3", "Music 4 Answer 4"]
var Music5 = ["Music 5 Answer 1", "Music 5 Answer 2", "Music 5 Answer 3", "Music 5 Answer 4"]

var Coding1 = ["Coding 1 Answer 1", "Coding 1 Answer 2", "Coding 1 Answer 3", "Coding 1 Answer 4"]
var Coding2 = ["Coding 2 Answer 4", "Coding 2 Answer 2", "Coding 2 Answer 3", "Coding 2 Answer 4"]
var Coding3 = ["Coding 3 Answer 1", "Coding 3 Answer 2", "Coding 3 Answer 3", "Coding 3 Answer 4"]
var Coding4 = ["Coding 4 Answer 1", "Coding 4 Answer 2", "Coding 4 Answer 4", "Coding 4 Answer 4"]
var Coding5 = ["Coding 5 Answer 1", "Coding 5 Answer 2", "Coding 5 Answer 3", "Coding 5 Answer 4"]

//Sport Buttons

$(document).ready(function(){
    $(".btn-choiceSport1").on("click",function() {
    if($(this).val()== 3){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceSport2").on("click",function() {
    if($(this).val()== 1){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceSport3").on("click",function() {
    if($(this).val()== 2){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceSport4").on("click",function() {
    if($(this).val()== 4){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceSport5").on("click",function() {
    if($(this).val()== 4){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });

//Animal Buttons

$(document).ready(function(){
 $(".btn-choiceAnimal1").on("click",function() {
 if($(this).val()== 1){
    playerScore +=100;    
 }
 else{
     playerscore -=100;
    }
 });   
});

$(document).ready(function(){
    $(".btn-choiceAnimal2").on("click",function() {
    if($(this).val()== 3){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceAnimal3").on("click",function() {
    if($(this).val()== 2){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceAnimal4").on("click",function() {
    if($(this).val()== 1){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceAnimal5").on("click",function() {
    if($(this).val()== 4){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
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
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceHistory3").on("click",function() {
    if($(this).val()== 3){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceHistory4").on("click",function() {
    if($(this).val()== 1){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceHistory5").on("click",function() {
    if($(this).val()== 4){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });

   //Music Buttons

   $(document).ready(function(){
    $(".btn-choiceMusic1").on("click",function() {
    if($(this).val()== 4){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceMusic2").on("click",function() {
    if($(this).val()== 4){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   }); 

   $(document).ready(function(){
    $(".btn-choiceMusic3").on("click",function() {
    if($(this).val()== 2){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceMusic4").on("click",function() {
    if($(this).val()== 1){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceMusic1").on("click",function() {
    if($(this).val()== 2){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });
   
   //Coding Buttons
   $(document).ready(function(){
    $(".btn-choiceCoding1").on("click",function() {
    if($(this).val()== 3){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   }); 

   $(document).ready(function(){
    $(".btn-choiceMusic2").on("click",function() {
    if($(this).val()== 2){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceMusic3").on("click",function() {
    if($(this).val()== 1){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceMusic4").on("click",function() {
    if($(this).val()== 4){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });

   $(document).ready(function(){
    $(".btn-choiceMusic5").on("click",function() {
    if($(this).val()== 3){
       playerScore +=100;    
    }
    else{
        playerscore -=100;
       }
    });   
   });