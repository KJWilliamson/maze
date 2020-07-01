//think of it as a grid and each square is a cell object
//essentialy the program is gong to figure out what walls should be removed to make a maze pattern
//cell object should know what row and column it's in
//0,1,2,3,4 etc
// for vertical and horizontal
//cell needs to know where it is and what's happening with it's walls


//do we create a player location before the map?
//left off at 20:20 on demo

const playerPosition = {
  //do i also reference column or row?
  cell: 0
}
//array of strings
const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];   
//W is a wall block
//F is a floor block
//S is a space
//need to connect player to keyboard events
//to move around inside maze on rows and columns
let y //column
let x  //row
//reference to the maze element in html
const mazeEl = document.getElementById('maze')
//create function createMaze and send it the map as a parameter sent it the array of strings above. const map
//once you get in your function the map is assigned to blueprint
//there's one row div for each row of the maze
//that's created by looping through the blueprint array above. the map
//looping through the array gives access to 1 string that represents all the blocks in that row. next iteration is the same and so on. everytime i lok at a string it's one string of blocks
//everytime i do that I need to make a row div
//when you put a name in the parameter of a function (blueprint) you can think of that as declarig a brand new variable without using let. 
const createMaze = function(blueprint) {
//nested for loops
//rowNum because it's the rows in the array 0,1,2,3,4, etc
//for loop to loop through blueprint and that's how i look at every row
//inside the first loop we have a second loop
for (let rowNum = 0; rowNum < blueprint.length; rowNum++) {
    const rowString = blueprint[rowNum]
    //we're creating a string of the blockdivs and as they're pulled out of just the markup and as we look at each block
    //we're adding to that string and in the end we'll have a 
    //whole big string full of divs of blocks and walls and etc.
    //and we take all of those block divs after we've finished //looping through each character and we'll put that string of divs in the middle of our new string for our row div and we'll add those all at once
    //to the innerHTML and that's how we're creating everything
    //did it this way instead of createElement and appendChild or //just append. 
    let blockDivs = ''
//this loop is lookng at the string of blocks for each row loops //over each character in each string of the map above
    for (let colNum = 0; colNum < rowString.length; colNum++) {
      //getting what type of block it is and pulling it out of that string wth blockType by using brackets with [colNum]
        const blockType = rowString[colNum]
        //if it's a W we're gong to create a block div with a //wall class. S block div with start class, etc.

        if (blockType === 'W') {
            blockDivs += '<div class = "block wall"></div>'
        } else if (blockType === 'S') {
                blockDivs += '<div class = "block start"><div id = "player"></div></div>'
                y = rowNum
                x = colNum
        } else if (blockType === 'F') { blockDivs += '<div class = "block finish"></div>'
        } else {
          //if it's a space in the map it's a block
            blockDivs += '<div class = "block"></div>'
        } 
    }
  //appending to the innerHTML of the maze some new markup that 
  //includes a div with a class of row and inside that div the blocks. make sure you're giving a div class row for each row of the map
  //it takes less code using innerHTML- DOM manipulation
    mazeEl.innerHTML += '<div class = "row">' + blockDivs + '</div>'



}
}
//the maze above as a parameter
//could make multiple maps and just plug in map2 or map3 etc
//the way al of this code is written is that it doesn't make
//any assumptions about the size of the map. it's lookng for W's, S's, F's, and anything else it makes a block
//whatever size and shape ofthe map won't matter to the //createMaze fuction

createMaze(map)


// keyboard event code
let boxTop = 200;
let boxLeft = 200;


document.addEventListener('keydown', logKey);

function logKey(event) {
  if(event.key == "ArrowRight") {
    boxLeft += 10
  }

  else if(event.key == "ArrowDown") {
    boxTop += 10
  }

  else if(event.key == "ArrowLeft") {
    boxLeft -= 10
  
  }

  else if(event.key == "ArrowUp") {
    boxTop -= 10
  }

  // should player be here
  //document.getElementById("player")

  document.getElementById("box").style.top = boxTop + "px";
  document.getElementById("box").style.left = boxLeft + "px";
  

}


