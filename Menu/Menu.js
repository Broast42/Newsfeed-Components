/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const button = document.querySelector(".menu-button");
const header = document.querySelector(".header");


header.appendChild(createMenu(menuItems));

function createMenu(arr){
  const menuDiv = document.createElement('div');
  const menuUl = document.createElement('ul');
  
  menuDiv.appendChild(menuUl);

  arr.forEach(x=>{
    const menuLi = document.createElement("li");
    menuUl.appendChild(menuLi);
    menuLi.textContent = x;

  });

  menuDiv.classList.add("menu");
  
  // button.addEventListener('click', ()=>{
  //   menuDiv.classList.toggle("menu--open");
  // });

  button.addEventListener("click", ()=>{
    if(menuDiv.style.animationName === "menuSlide"){
      menuDiv.style.animationName = "menuSlideOut";
      
          
    }else{
      menuDiv.style.animationName = "menuSlide";
      menuDiv.style.display = "block";
    }
     
  });

  menuDiv.addEventListener("animationend", ()=>{
    if(menuDiv.style.display === "block" &&  menuDiv.style.animationName === "menuSlideOut"){
      menuDiv.style.display = "none";
    }
  });

  window.addEventListener("click", (e)=>{
    //if( menuDiv.style.animationName === "menuSlide"){
      if(e.target !== menuDiv && e.target !== button){ 
        menuDiv.style.animationName = "menuSlideOut";
      }
       
    //}
  });

  return menuDiv;

}

 
