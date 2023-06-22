var world = [
  [2,2,2,2,2,2,2,2,2,2],
  [2,0,1,1,2,1,1,1,1,2],
  [2,1,1,1,2,1,1,2,1,2],
  [2,1,1,1,2,1,1,2,1,2],
  [2,1,1,1,2,2,2,2,1,2],
  [2,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,2],
  [2,2,2,2,2,2,2,2,2,2],
]
var pacman = {
  x: 1,
  y: 1
}

var ghost = {
  x: 1,
  y: 1
}


function displayWorld() {
  var output = "";
  for (let i = 0; i < world.length; i++) {
    output += "\n<div class='row'>\n"
    for (let j = 0; j < world[i].length; j++) {
      if (world[i][j] == 2) {
        output += "<div class='brick'></div>"
      } else if (world[i][j] == 1) {
        output += "<div class='coin'></div>"
      }
      if (world[i][j] == 0) {
        output += "<div class='empty'></div>"
      }
    }
    output += "\n</div>"
  }
  document.getElementById("world").innerHTML = output
}

function displayPacman() {
  document.getElementById("pacman").style.top = pacman.y *25 + 2 +"px"
  document.getElementById("pacman").style.left = pacman.x *25 + 2 +"px"
}

displayPacman()
displayWorld()


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
      if (pacman.y < 8 && world[pacman.y + 1][pacman.x] !== 2) {
        return true
      }
      break;
    case "ArrowLeft":
      if (pacman.x > 0 && world[pacman.y][pacman.x - 1] !== 2) {
        return true
      }
      break;
    case "ArrowRight":
      if (pacman.x < 9 && world[pacman.y][pacman.x + 1] !== 2) {
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

  if (world[pacman.y][pacman.x] == 1) {
    world[pacman.y][pacman.x] = 0;
  }


  displayPacman()
  displayWorld()
}
