function(c){var d={debugIf:function(b,a){b&&this.debug(a)},debug:function(b){console.log("jQuery.smoothScrollTop: "+b)}};c.fn.smoothScrollTop=function(b){var a=c.extend({duration:500,offset:0,element:this,parent:c("body"),done:null,scrollInvisibles:!1,debug:!1},b);1<a.element.length&&(d.debugIf(a.debug,"Scrolling is not possible on multiple elements. Assuming first element to be meant."),a.element=a.element.first());if(("none"==a.element.css("display")||"0"==a.element.css("opacity"))&&!a.scrollInvisibles)return d.debugIf(a.debug,
"Scrolling on invisbile objects is turned off."),this;b=0;b=a.element.position().top;0!=a.offset&&(b+=a.offset);d.debugIf(a.debug,"Scrolling to "+b+" (offset: "+a.offset+")");c(a.parent).animate({scrollTop:b},a.duration,function(){d.debugIf(a.debug,"Scrolling done.");null!=a.done&&a.done()});return this}})(jQuery);