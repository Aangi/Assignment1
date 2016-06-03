/* main javascript file  */

(function(){
    
    "use strict";
// code codes in here 
console.log("App started...");

var firstParagraphTag = document.getElementById("firstParagraph");

var firstParagraph = "It is my first paragraph";
  

//declare named function
function writeTofirstParagraph() {
    
        //create a reference to a p element with an id of "firstParagraph"
        firstParagraphTag.textContent = firstParagraph;
      }
      writeTofirstParagraph();
    
    
    
    
    
    
})();