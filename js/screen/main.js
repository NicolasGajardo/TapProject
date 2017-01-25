(function() {
  console.log("MAIN INIT");

  $(document).ready(function() {
    Context.init("canvas");

    Context.context.beginPath();
    Context.context.rect(0, 0, 640, 480);
    Context.context.fillStyle = '#EADB8B';
    Context.context.fill();

  });
})()
