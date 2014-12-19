requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: '../components/jquery/dist/jquery'
  }
});
require(['load', 'deps', 'one', 'jquery'], function(load, deps, one) {
  load(deps);

  // two.hey(one);
});