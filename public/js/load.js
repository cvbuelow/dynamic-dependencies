define(function() {
  
  function hash(array) {
    return window.btoa(JSON.stringify(array));
  }

  return function(neededDeps) {
    var loadedDeps = Object.keys(require.s.contexts._.defined);
    console.log(loadedDeps);
    var include = hash(neededDeps);
    var exclude = hash(loadedDeps);

    var script = document.createElement('script');
    script.src = 'package/' + include + '/' + exclude;
    document.head.appendChild(script);
  };
});