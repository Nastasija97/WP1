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
 "link": "#contact",
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

//glassy hover animation

//line under nav items via jquerry
























//buttons animation


var menu=document.querySelector('#mobile-menu');
var menuLinks=document.querySelector('.navbar_menu');

menu.addEventListener('click',function(){
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});