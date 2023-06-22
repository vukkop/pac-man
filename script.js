var world = [
  [2,2,2,2,2,2,2,2,2,2],
  [2,1,1,1,2,1,1,1,1,2],
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

document.onkeydown = function (e) {
  if (e.key == "ArrowUp" && pacman.y > 0) {
    pacman.y -= 1;
  }
  else if (e.key == "ArrowDown" && pacman.y < 8) {
    pacman.y += 1;
  }
  else if (e.key == "ArrowLeft"  && pacman.x > 0) {
    pacman.x -= 1;
  }
  else if (e.key == "ArrowRight" && pacman.x < 9) {
    pacman.x += 1;
  }

  if (world[pacman.y][pacman.x] == 1) {
    world[pacman.y][pacman.x] = 0;
  }




  console.log(pacman);
  displayPacman()
  displayWorld()
}
