  var Context = {
    canvas: null,
    context: null,
    init: function(canvasid) {
      this.canvas = document.getElementById(canvasid);
      this.context = canvas.getContext('2d');
      return this.ctx;
    }
  }
  console.log("CTX INIT");
