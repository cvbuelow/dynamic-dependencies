define(function() {
  
  function hash(array) {
    return window.btoa(JSON.stringify(array));
  }

  return function(neededDeps, cb) {
    var loadedDeps = Object.keys(require.s.contexts._.defined);

    var include = hash(neededDeps);
    var exclude = hash(loadedDeps);

    var script = document.createElement('script');
    script.src = 'package/' + include + '/' + exclude;
    document.head.appendChild(script);

    if (cb) {
      var inlineScript = document.createElement('script');
      inlineScript.type = 'text/javascript';
      inlineScript.innerText = cb;
      document.head.appendChild(inlineScript);
    }
  };
});