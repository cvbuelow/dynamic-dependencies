require(['three', 'jquery', 'pubsub'], function(three) {

  var course = {
    hey: function(msg) {
      three.yo(msg);
    }
  };

  $.publish('course-loaded', course);
});