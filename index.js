
//get Accordion button Element
var buttonAccordion =document.getElementsByClassName("button-accordion");

//add the addEventListener for every button
for (var i=0; i< buttonAccordion.length; i ++){

    buttonAccordion[i].addEventListener("click", function(event){
       
       var card = document.getElementById("card-description-" + event.target.getAttribute("data-id"));
       var cards = document.getElementsByClassName("card-body-list-element-description");

       //We remove the class hidden for every element
       for(var i = 0; i < cards.length; i++){

           cards[i].classList.add("is-hidden");
       
        }
        //We add the class not-hidden for the element to be shown  
       if(card.classList.contains("is-hidden")){

           card.classList.remove("is-hidden");
           card.classList.add("not-hidden");
           
       }
    })    
}
