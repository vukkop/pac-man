// Get absolute position for Pac-man and the ghost. Randomly space the ghost 10 units away from Pac-man at the start.

// Make the ghost move randomly each time the Pac-man moves. He only should move 1 for 1 with the Pac-man.

// Place cherries in the world. ✅ lol

//


var world = [
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  [2,0,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,3,2],
  [2,1,2,2,2,1,2,2,1,2,2,1,2,2,1,2,2,2,1,2],
  [2,1,2,1,1,3,1,1,1,1,1,1,1,1,3,1,1,2,1,2],
  [2,1,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,1,2],
  [2,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,2],
  [2,1,2,2,2,1,2,2,1,2,2,1,2,2,1,2,2,2,1,2],
  [2,1,2,1,1,1,2,1,1,1,1,1,1,2,1,1,1,2,1,2],
  [2,1,2,1,2,1,2,1,2,2,2,2,1,2,1,2,1,2,1,2],
  [2,1,2,1,2,1,1,1,2,0,0,0,1,1,1,2,1,2,1,2],
  [2,1,2,1,2,2,2,1,2,0,0,2,1,2,2,2,1,2,1,2],
  [2,1,1,3,1,1,1,1,2,2,2,2,1,1,1,1,3,1,1,2],
  [2,1,2,1,2,2,2,1,1,1,1,1,1,2,2,2,1,2,1,2],
  [2,1,2,1,2,1,1,1,2,2,2,2,1,1,1,2,1,2,1,2],
  [2,1,2,1,2,1,2,1,2,2,2,2,1,2,1,2,1,2,1,2],
  [2,1,1,1,1,3,2,1,1,1,1,1,1,2,3,1,1,1,1,2],
  [2,1,2,2,2,1,2,1,2,2,2,2,1,2,1,2,2,2,1,2],
  [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2],
  [2,1,2,2,2,1,2,1,2,2,2,2,1,2,1,2,2,2,1,2],
  [2,3,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,3,2],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
]

// function createBoard(x, y) {
//   let board = [];
//   let cherries = 0;
//   let ghosts = 0;
//   for (let i = 0; i <= x; i++) {
//     let row = [];
//     for (var j = 0; j <= y; j++) {
//       // top and bottom row check
//       if (i === 0 || i === x) {
//         row.push(2);
//       } else if (j === 0 || j === y) {
//         // this would be the far left and right columns
//         row.push(2);
//       } else {
//         // we can choose a random tile now.  We can also create a new function with rules for tiles
//         while (!checkCell(board, i, j)) {
//           let newCell = randomCell(ghosts, cherries);
//           if (newCell === 3) {
//             cherries++;
//           }
//           if (newCell === 4) {
//             ghosts++;
//           }
//         }

//       }
//     }
//     board.push(row)
//   }
//   return board;
// }


// function randomCell(ghosts, cherries) {
//   let choices = [1, 2, 3, 4];
//   if (ghosts > 1) {
//     choices.pop(4);
//   }
//   if (cherries > 3) {
//     choices.pop(3);
//   }
//   let random = Math.floor(Math.random() * choices.length);
//   return choices[random];
// }

// function checkCell(board, i, j) {
//   // if we are in the top row or on an edge, return true
//   if (i === 0 || i === board.length - 1 || j === 0 || j === board[i].length - 1) {
//     return true;
//   }
//   // if we are in the middle, check if we are touching 2 or more walls and return false
//   let walls = 0;
//   if (board[i - 1][j] === 2) {
//     walls++;
//   }
//   if (board[i + 1][j] === 2) {
//     walls++;
//   }
//   if (board[i][j - 1] === 2) {
//     walls++;
//   }
//   if (board[i][j + 1] === 2) {
//     walls++;
//   }
//   if (walls >= 2) {
//     return false;
//   }
//   return true;
// };

var pacman = {
  x: 1,
  y: 1
}

var ghost = {
  x: 9,
  y: 9
}

function displayWorld() {
  var output = "";
  for (let i = 0; i < world.length; i++) {
    output += "\n<div class='row'>\n";
    for (let j = 0; j < world[i].length; j++) {
      if (world[i][j] == 2) {
        output += "<div class='brick'></div>";
      } else if (world[i][j] == 1) {
        output += "<div class='coin'></div>"
      }else if (world[i][j] == 3) {
        output += "<div class='cherry'></div>"
      }
      if (world[i][j] == 0) {
        output += "<div class='empty'></div>";
      }
    }
    output += "\n</div>"
  }
  document.getElementById("world").innerHTML = output
}

function displayPacman() {
  document.getElementById("pacman").style.top = pacman.y * 25 + 2 + "px"
  document.getElementById("pacman").style.left = pacman.x * 25 + 2 + "px"
}

function displayGhost() {
  document.getElementById("ghost").style.top = ghost.y * 25 + 2 + "px";
  document.getElementById("ghost").style.left = ghost.x * 25 + 2 + "px";
}


displayWorld()
displayPacman()
displayGhost()


function pacmanRotate(deg) {
  document.getElementById("pacman").style.rotate = deg + "deg"
}

function posCheck(dir) {
  switch (dir) {
    case "ArrowUp":
      if (pacman.y > 0 && world[pacman.y - 1][pacman.x] !== 2) {
        return true
      }
      break;
    case "ArrowDown":
      if (pacman.y < 19 && world[pacman.y + 1][pacman.x] !== 2) {
        return true
      }
      break;
    case "ArrowLeft":
      if (pacman.x > 0 && world[pacman.y][pacman.x - 1] !== 2) {
        return true
      }
      break;
    case "ArrowRight":
      if (pacman.x < 18 && world[pacman.y][pacman.x + 1] !== 2) {
        return true
      }
      break;

    default:
      return false;
  }

  world[pacman.y - 1][pacman.x] !== 2
}


document.onkeydown = function (e) {
  if (e.key == "ArrowUp" && posCheck(e.key)) {
    pacmanRotate(270)
    pacman.y -= 1;
  }
  else if (e.key == "ArrowDown" && posCheck(e.key)) {
    pacmanRotate(90)
    pacman.y += 1;
  }
  else if (e.key == "ArrowLeft" && posCheck(e.key)) {
    pacman.x -= 1;
    pacmanRotate(180)
  }
  else if (e.key == "ArrowRight" && posCheck(e.key)) {
    pacman.x += 1;
    pacmanRotate(0)
  }
  // created a var for Pac-man's position
  let pacmanPos = world[pacman.y][pacman.x];
  // Added an additional check if his position on a cherry.
  if (pacmanPos == 1 || pacmanPos == 3) {
    world[pacman.y][pacman.x] = 0;
  }


  displayPacman()
  displayWorld()
}
