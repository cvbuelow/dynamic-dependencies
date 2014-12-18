var requirejs = require('requirejs');
/*requirejs.config({
  baseUrl: __dirname + '../js/',
  nodeRequire: require,
  paths: {
    requireLib: '../../node_modules/requirejs/require'
  }
});*/
var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/package/:include/:exclude?', function(req, res) {

  function atob(str) {
    return new Buffer(str, 'base64').toString('binary');
  }

  var modules = JSON.parse(atob(req.params.include));
  var config = {
      baseUrl: 'public/js',
      paths: {
        requirejs: '../../node_modules/requirejs/require'
      },
      optimize: 'none',
      // name: 'requirejs',
      include: modules,
      // exclude: ['three'],
      out: function(text) {
        res.setHeader('content-type', 'text/javascript');
        res.write(text);
        res.end();
      }
  };

  requirejs.optimize(config, function (buildResponse) {
      //buildResponse is just a text output of the modules
      //included. Load the built file for the contents.
      //Use config.out to get the optimized file contents.
      // var contents = fs.readFileSync(config.out, 'utf8');
  }, function(err) {
      //optimization err callback
      console.log(err);
  });

});