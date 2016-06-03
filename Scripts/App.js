/* main javascript file  */
//IIFE - Immediately Invoked Function Expression
(function(){
    
    "use strict";
// code codes in here 

// define an array of HTML elements
     var paragraphElements = [];
     
    paragraphElements[0] = document.getElementById("aboutPara");
    paragraphElements[1] = document.getElementById("projectsPara");
    paragraphElements[2] = document.getElementById("contactPara");
     // define your paragraphs array;
     var paragraphs = [];
     
     // data for my pages
     paragraphs[0] = "My name is <strong>Aayushi Shah</strong>. I am from India. I am studying <strong>Software Engineering Technology</strong> at Centennial College. I want to become an outstanding Software Engineer after completing my course. I want to get a degree from a renowned university after graduating from this course. Other than my field, I like mathematics subject the most.";
     paragraphs[1] = "This is my second paragraph. It is only visible on the second page";
     paragraphs[2] = ""
     
     // second way to define an array
     //var paragraphs = new Array();
     
     // check to see if paragraph one exists
     for (var index = 0; index < paragraphElements.length; index++) {
         if(paragraphElements[index]) {
          paragraphElements[index].innerHTML = paragraphs[index];
         }
     }
      
      
  })(); 
