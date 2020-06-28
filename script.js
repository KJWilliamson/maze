//Here is JavaScript data representing the maze above. Each "W" is a wall, "S" marks 
//the start position, and "F" marks the finish. Spaces are empty cells that 
//the player can walk through.

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


let y
let x

const mazeEl = document.getElementById('maze')

const createMaze = function(blueprint) {
//nested for loops
for (let rowNum = 0; rowNum < blueprint.length; rowNum++) {
    const rowString = blueprint[rowNum]
    let blockDivs = ''

    for (let colNum = 0; colNum < rowString.length; colNum++) {
        const blockType = rowString[colNum]
        if (blockType === 'W') {
            blockDivs += '<div class = "block wall"></div>'
        } else if (blockType === 'S') {
                blockDivs += '<div class = "block start"></div>'
                y = rowNum
                x = colNum
        } else {
            blockDivs += '<div class = "block"></div>'
        }
    }

    mazeEl.innerHTML += '<div class = "row"></div>'

}
}
createMaze(map)


