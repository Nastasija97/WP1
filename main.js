//dynamic navigation
const navigationList = [
 {
 "text": "Aurora8",
 "link": "/aurora8.html",
 "class":"navbar_links"
 },
 {
 "text": "Sirious Ultra",
 "link": "/siriousultra.html",
 "class":"navbar_links"
 },
 {
 "text": "Capella",
 "link": "/capella.html",
 "class":"navbar_links"
 },
 {
 "text": "Home",
 "link": "/",
 "class":"navbar_links"
 },
 {
 "text": "Contact",
 "link": "contact.html",
 "class":"navbar_links"
 }
];
function populateNavigation () {

 function createLink(linkData){
 //Kreiraj a tag i dodeli mu href atribut i tekst
 var aElement = document.createElement("a");
 aElement.innerText = linkData.text;
 aElement.href = linkData.link;
 aElement.className=linkData.class;
 //Kreiraj li element i dodaj mu a tag kao child
 var linkElement = document.createElement("li");
 linkElement.appendChild(aElement);
 return linkElement;
 }

 var navigationUl = document.getElementById("navbar_menu");
 for (var i = 0; i < navigationList.length; i++) {
 navigationUl.appendChild(createLink(navigationList[i]));
 }
 

}
populateNavigation();
//dynamic navigation

//mobile navigation


var menu=document.querySelector('#mobile-menu');
var menuLinks=document.querySelector('.navbar_menu');

menu.addEventListener('click',function(){
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

//mobile navigation

//slider animation JQuery
$(function(){
  //config
  var width=720;
  var animationSpeed=1000;
  var pause=3000;
//cache DOM
var $slider=$('#slider');
var $slideContainer=$slider.find('.slides');
var $slides=$slideContainer.find('.slide');
var currentSlide=1;
//defining interval here because of var function scope 
var interval;
function startSlider()
{
     interval= setInterval(function()
    {
        $slideContainer.animate(
          {'margin-left': '-='+width},
          animationSpeed,
          function(){
            //checking if we are on the first slide
            currentSlide++;
            if(currentSlide==$slides.length){
              currentSlide=1;
              $slideContainer.css('margin-left',0);
            }
          });
    },pause);
}

function stopSlider(){
  clearInterval(interval);
}

  //setInterval
  //animate margin-left
  //if it's last slide,go to pos 1 0px
$slider.on('mouseenter',stopSlider).on('mouseleave',startSlider); 
  //listen to mousecenter and posuse
  //resume on mouseleave
startSlider();
});

//slider animation JQuery

//button function
document.getElementById("aurora8").onclick = function () {
  location.href = "aurora8.html";
};
document.getElementById("capella").onclick = function () {
  location.href = "capella.html";
};
document.getElementById("seriousUltra").onclick = function () {
  location.href = "siriousultra.html";
};

var buttonForm=document.getElementById("ticket_form");
buttonForm.onclick = function () {
  location.href = "contact.html";
};

