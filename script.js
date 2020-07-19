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
//row
let r
//column
let c

//reference to the maze element in html
const mazeEl = document.getElementById('maze')


const createMaze = function(blueprint) {

for (let rowNum = 0; rowNum < blueprint.length; rowNum++) {
  const rowString = blueprint[rowNum]

  let blockDivs = ''

  for (let colNum = 0; colNum < rowString.length; colNum++) {

      const blockType = rowString[colNum]
    

      if (blockType === 'W') {
          blockDivs += '<div class = "block wall"></div>'
      } else if (blockType === 'S') {
              blockDivs += '<div class = "block"><div id = "ghost"></div></div>'

              r = rowNum
              c = colNum

      } else if (blockType === 'F') { blockDivs += '<div class = "block finish"></div>'
      } else {
        //if it's a space in the map it's a block
          blockDivs += '<div class = "block"></div>'
      } 
  }

  mazeEl.innerHTML += '<div class = "row">' + blockDivs + '</div>'



}
}


createMaze(map)



// keyboard event code
let moveUpDwn = 200;
let moveLtRt = 0;


document.addEventListener('keydown', ghostMove);

function ghostMove(event) {
if(event.key == "ArrowRight") {
  //don't want ghost moving through walls

  if (map[r][c] !== "W") {
    
  } 
  moveLtRt += 20
}

else if(event.key == "ArrowDown") {
  if (map[r][c] !== "W") {
    
  } 
  moveUpDwn += 20
}

else if(event.key == "ArrowLeft") {
  if (map[r][c] !== "W") {
    
  } 
  moveLtRt -= 20

}

else if(event.key == "ArrowUp") {    
  if (map[r][c] !== "W") {
    
  }
  moveUpDwn -= 20
}

// should player be here
//document.getElementById("ghost").style.move = //moveUpDwn;
let ghost = document.getElementById("ghost")

document.getElementById("ghost").style.top = moveUpDwn + "px";
document.getElementById("ghost").style.left = moveLtRt + "px";


}


