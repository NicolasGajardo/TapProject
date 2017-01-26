var entityPath = "media/entity/"; //entityPath will be change to js\objects\sprite\figure
var square = new Item(entityPath + "item/square-100.png");
var angle = 45;
var acceleration = 1;
var speed = 0;

setInterval(function() {
  speed += 0.5;
  square.y = speed;

  // console.log(speed);
  Context.context.fillStyle = "#002300";
  Context.context.fillRect(0, 0, 800, 800);
  square.rotate(startPositions.x1, startPositions.y, angle += 0.5);
  //when click on an item the acceleration would increase by 0.1

}, 0);
