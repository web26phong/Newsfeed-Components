/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
  "New Menu Item"
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

//create the function that makes the menu
function createMenu(links){
  //declare variables
  const menuMain = document.createElement("div");
  const listMain = document.createElement("ul");

  //add classes
  menuMain.classList.add("menu");

  //add each item in the argument array (the array passed into the createMenu function) as a list item in the unordered list
  links.forEach(item => {
    const menuItem = document.createElement("li");
    menuItem.textContent = item;
    listMain.appendChild(menuItem);
  })

  //add an event listener and handler to the image with the class "menu-button"
  //toggles the class "menu--open" in the div with the class "menu" (menuMain in this case has the "menu" class)
  document.querySelector(".menu-button").addEventListener("click", event => {
    menuMain.classList.toggle("menu--open");
  })

  //append the unordered list containing all the list items (from the array) to the div with the class "menu"
  menuMain.appendChild(listMain);

  //return the entire menu
  return menuMain;

}

//call the createMenu function, pass it the menuItems array, and append that list to the div with the class of "header"
document.querySelector(".header").appendChild(createMenu(menuItems));