console.log("MAPEADO DEL ROVER");
var grid = [
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null]
];

var rover = {
  direction:"N",
  travelLog:"",
  x:0,
  y:0
}

var direction = rover.direction;
var x = rover.x;
var y = rover.y;
var travelLog = rover.travelLog;
grid [x][y]="X";
console.log("Coord's " + "x:"+ x +", y:"+ y );


function turnLeft(rover){
  switch(direction){
  case "N":
  direction="W";
  break;

  case "W":
  direction="S";
  break;

  case "S":
  direction="E";
  break;

  case "E":
  direction="N";
  break;
  default:
  console.log("Intruduce direction to move it --> N,W,S,E");
}
console.log("turnLight was called!");
}
console.log("You are here: " + direction);
console.log("You've turned !");


function turnRight(rover){
  switch(direction){
      case "N":
      direction="E";
      break;

      case "W":
      direction="N";
      break;

      case "S":
      direction="W";
      break;

      case "E":
      direction="S";
      break;
      default:
      console.log("Intruduce direction to move it --> N,W,S,E");
    }
  console.log("turnRight was called!");
}
console.log("You are here: " + direction);
console.log("You've turned right!");


function moveForward(rover){
  switch(direction){
     case "N":
     y-=1;
     break;

     case "W":
     x-=1;
     break;

     case "S":
     y+=1;
     break;

     case "E":
     x+=1;
     break;
     default:
     console.log("introduce direction to move it --> N,W,S,E");
   }
 console.log("moveForward was called")
}
console.log("You've advanced forward!");
