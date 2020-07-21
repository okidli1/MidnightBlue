var sportsQ = ["Sports1", "Sports2", "Sports3", "Sports4", "Sports5"]
var animalsQ = ["Animals1", "Animals2", "Animals3", " Animals4", "Animals5"]
var historyQ = ["History1", "History2", "History3", " History4", "History5"]
var musicQ = ["Music1", "Music2", "Music3", "Music4 ", "Music5"]
var uPennCodingQ = ["Coding1", "Coding2", "Coding3", "Coding4", "Coding5"]
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