  var Context = {
    canvas: null,
    context: null,
    init: function(canvasid) {
      this.canvas = document.getElementById(canvasid);
      this.context = canvas.getContext('2d');
      return this.ctx;
    }
  };

  //TODO: I will created a script what set the positions depending the screen size
  var startPositions = {
    x1 : 210,
    x2 : 320,
    x3 : 430,
    x4 : 540,
    y : -30
  };
  console.log("CTX INIT");
