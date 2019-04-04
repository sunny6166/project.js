

var rover = {
  direction : 'N',
    x : 0,
    y : 0,
    travelLog :[],
}

function turnLeft(rover){
  switch (rover.direction){
    case 'N' :
    rover.direction = 'W';
    break;
    case 'W':
    rover.direction = 'S';
    break;
    case 'S':
    rover.direction = 'E';
    break;
    case 'E':
    rover.direction = 'N';
    break;
  }
}

function turnRight(rover){
  switch (rover.direction) {
    case 'N' :
    rover.direction = 'E';
    break;
    case 'E' :
    rover.direction = 'S';
    break;
    case 'S':
    rover.direction = 'W';
    break;
    case 'W':
    rover.direction = 'N';
    break;
}
}

function moveForward(rover){
  switch (rover.direction) {
    case "N": 
    rover.y-=1;
    break;
    case "W":
    rover.x-=1;
    break;
    case "S":
    rover.y+=1;
    break;
    case "E":
    rover.y+=1;
    break;
}
console.log("New position of the rover is: " + rover.x + " & " + rover.y);
rover.travelLog.push([rover.x, rover.y]);
}

function moveBackward(rover) {
  switch (rover.direction) {
    case "N":
    rover.y+=1;
    break;
    case "W":
    rover.x+=1;
    break;
    case "S":
    rover.y-=1;
    break;
    case "E":
    rover.y-=1;
    break;
}
console.log("New position of the rover is: " + rover.x + " & " + rover.y)
rover.travelLog.push([rover.x, rover.y]);
}

var grid = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
];


var commandList = "";
function commands(commandList) {
  for (var i=0; i<commandList.length; i++){
    switch (commandList[i]) {
      case "f":
      moveForward(rover);
      break;
      case "b":
      moveBackward(rover);
      break;
      case "l":
      turnLeft(rover);
      break;
      case "r":
      turnRight(rover);
      break;
      default:
      console.log("Invalid Command");
    };
  };
}
commands('rffrfflfrff');
console.log(rover.log);