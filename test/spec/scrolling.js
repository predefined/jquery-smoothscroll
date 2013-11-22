module('smoothScrollTop');

test('Return something at the end', function() {
  var self = $("#page").smoothScrollTop();
  ok(self !== undefined);
});

test('Catch on empty selectors', function() {
  var self = $("").smoothScrollTop();
  ok(self !== undefined);  
});

test('Scroll to first element but return collection', function() {
  var $elements = $("h1");
  var self = $elements.smoothScrollTop();
  ok(self == $elements);
});

asyncTest('Call done callback', function() {
  expect(1);
  
  $("#page").smoothScrollTop({
    duration: 0,
    'done': function() {
      ok(true);
      start();
    }
  });

});
