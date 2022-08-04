(function() {
    var Graphics__centerElement = Graphics._centerElement;
    Graphics._centerElement = function() {
      Graphics__centerElement.call(this);
  
      this._canvas.style.width = "100%";
      this._canvas.style.height = "100%";
    }
  })()