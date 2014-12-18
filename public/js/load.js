(function() {
  //somehow determine the dependencies
  var deps = ['main'];
  var hash = window.btoa(JSON.stringify(deps));

  var script = document.createElement("script");
  script.src = 'package/' + hash;
  document.head.appendChild(script);
})();