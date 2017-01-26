console.log("Item.js INIT");
var Item = function (filename) {

  this.image = null;
  this.TO_RADIANS = Math.PI / 180;
  this.x = 0;
  this.y = 0;

  if (filename != undefined && filename != "" && filename != null) {
    this.image = new Image();
    this.image.src = filename;

  } else {
    console.log("Unable to load Item.");
  }

  this.draw = function(x, y, w, h) {

    if (w != undefined && h != undefined) {
      Context.context.drawImage(this.image, x, y, this.image.width, this.image.height);
    } else {
      Context.context.drawImage(this.image, x, y, w, h);
    }

  };

  this.rotate = function(x, y, angle) {
    Context.context.save();
    Context.context.translate(this.x + x, this.y + y);
    Context.context.rotate(angle * this.TO_RADIANS);
    Context.context.drawImage(this.image, -(this.image.width / 2), -(this.image.width / 2));
    Context.context.restore();
  };
}
