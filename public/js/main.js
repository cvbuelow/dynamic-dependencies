require(['load', 'deps', 'one', 'jquery', 'pubsub'], function(load, deps, one) {
  
  load(deps);

  $.subscribe('course-loaded', function(event, course) {
    course.hey(one);
  });

});