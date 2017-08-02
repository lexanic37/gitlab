$('#fullpage').fullpage({anchors:['onePage', 'twoPage', 'threePage', 'forPage', 'fifthPage'],
  animateAnchor: false,
  scrollBar:true,
  menu: '#mainMenu'});
(function() {
  var removeSuccess;

  removeSuccess = function() {
    return $('.button').removeClass('success');
  };

  $(document).ready(function() {
    return $('.button').click(function() {
      $(this).addClass('success');
      return setTimeout(removeSuccess, 3000);
    });
  });

}).call(this);
(function() {
  var removeSuccess;

  removeSuccess = function() {
    return $('.buttonmap').removeClass('success');
  };

  $(document).ready(function() {
    return $('.buttonmap').click(function() {
      $(this).addClass('success');
      return setTimeout(removeSuccess, 3000);
    });
  });

}).call(this);
(function() {
  var removeSuccess;

  removeSuccess = function() {
    return $('.buttoncost').removeClass('success');
  };

  $(document).ready(function() {
    return $('.buttoncost').click(function() {
      $(this).addClass('success');
      return setTimeout(removeSuccess, 3000);
    });
  });

}).call(this);
$(document).ready(function() {
$('#fullpage').fullpage({
scrollBar: true,
afterRender: function(){
new WOW().init();
}
});
});