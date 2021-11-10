// get the menu icon element from the dom tree
const menuBtn=document.querySelector(".menu-icon");
// create a a click event on menu icon
menuBtn.addEventListener("click",()=>{
	menuBtn.classList.toggle("open");
});