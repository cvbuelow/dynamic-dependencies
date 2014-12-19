var requirejs = require('requirejs');
var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/package/:include/:exclude?', function(req, res) {

  function atob(str) {
    return new Buffer(str, 'base64').toString('binary');
  }

  function unhash(hash) {
    return JSON.parse(atob(hash));
  }

  var include;

  if (req.params.include === 'main') {
    include = ['requirejs', 'main'];    // core dependencies, get these from somewhere
  } else {
    include = unhash(req.params.include);
  }

  var exclude = req.params.exclude && unhash(req.params.exclude) || [];
  
  var config = {
      baseUrl: 'public/js',
      paths: {
        requirejs: '../components/requirejs/require',
        jquery: '../components/jquery/dist/jquery',
        pubsub: '../components/jquery-tiny-pubsub/dist/ba-tiny-pubsub'
      },
      optimize: 'none', // Files should be pre-minified to improve performance so not doing it here
      include: include,
      exclude: exclude,
      out: function(text) {
        res.setHeader('content-type', 'text/javascript');
        res.write(text);
        res.end();
      }
  };

  requirejs.optimize(config, null, function(err) {
    console.log(err);
  });

});