https://kamelaw.gitlab.io/maze/


Randy supplied lots of Css and JS code in demo and it's being used in here

*****Today, you will create a JavaScript game that displays a maze, and lets the player use the cursor keys to move through it one step at a time. The maze is a 2D array of cells which are either floors (passable) or walls (impassable).*****

*****GUIDANCE*******

Make each cell of the maze a DIV.
Make each row of the maze a DIV using "display: flex;"
Either A) use an absolutely-positioned DIV to represent the player's current position in the maze, or B) have your player DIV appended to a cell DIV for the same reason.
You need to keep track of (or retrieve on demand) the player's current position in the maze (row index and column index). You could do this one of several ways. You could keep a persistent record of the player's position in, say, a global array or object whose sole job is keeping track of the player's current position. You could constantly update your map array to reflect your player's movement (move the "S" around). You could keep your indexes in data attributes in your HTML and access them through player DIV's "parentElement" property (in the case of 3B). Or you could do a little math on the player DIV's current position on the screen, relative to the start element's current position on the screen and the size of your cells (in the case of 3A).
Movement can be performed a couple different ways: In the case of 3A, change the absolute position of the player DIV. Or, in the case of 3B, append the player DIV to the next cell DIV. (You could use "document.querySelector()", and the CSS selector for attributes to get the next cell element by the indexes you set on it via data attributes.)

****REQUIREMENTS:*******

The player must start on the start square.
Set up an event handler(s) to move your player DIV around the same way you did for the previous assessment on keyboard events.
Don't allow the player to move into a wall or outside the boundary of the maze.
When the player moves onto the finish square, show the user that they have won (don't use console.log or alert for this).

*****BREAKDOWN:******

Draw the maze. (Randy gave us code for this)

Allow user to move through the maze, blocked by walls and cannot move outside the maze  Must have a start and finish point

Using keyboard events to move player around with arrow keys

Game is won when the player reaches finish




