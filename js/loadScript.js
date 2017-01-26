function loadScript (url, is_async){
  this.new_script = document.createElement('script');
  new_script.async = is_async;
  new_script.src = (url);
  var s = document.getElementById('main_id');
  s.parentNode.insertBefore(new_script, s.nextSibling);
  // $(new_script).insertAfter(s);
  return true;
};
