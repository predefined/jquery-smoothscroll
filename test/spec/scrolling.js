describe('jquery-smoothscroll', function() {
  describe('#smoothScrollTop', function() {
    
    it('should return something at the end', function() {
      
      var self = $("#page").smoothScrollTop();
      assert(self !== undefined);
      
    });
    
    it('should not crash on empty selectors', function() {
      
      var self = $("").smoothScrollTop();
      assert(self !== undefined);
      
    });
    
    it('should scroll to first element but return collection', function() {
      
      var $elements = $("h1");
      var self = $elements.smoothScrollTop();
      assert(self == $elements);
      
    });
    
    it('should call done callback', function(done) {
      
      $("#page").smoothScrollTop({
        duration: 0,
        'done': done
      });
      
    });
    
  });
});
