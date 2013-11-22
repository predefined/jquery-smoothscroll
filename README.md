jquery-smoothscroll.js
===================

A jQuery plugin for smooth page scrolling.

## What it does
SmoothScroll introduces the <code>smoothScrollTop</code> function that makes the browser smoothly scroll to the specified element.

## How to use
If you have a webpage you want to scroll on, simply add jQuery and the plugin to your references.
If you did that, simply get the element you want to scroll to and execute <code>smoothScrollTop();</code>.

## API

General usage:

    $(selector).smoothScrollTop([options]);
    
### Options

* duration: int  
    The time of the scroll animation in ms. Defaults to 500.
* offset: int  
    Offset from the top of the specified element. Defaults to 0.
* element: jQuery-Element  
    The element to scroll on. Defaults to the selected element.
* parent: jQuery-Element  
    The parent the scroll should be done on. Defaults to $("body").
* done: Function  
    A callback that will be called when the function quits. Defaults to nothing.
* scrollInvisibles: bool  
    Determines whether invisible objects should be valid targets. Defaults to false.
* debug: bool  
    Determines whether debug messages (for bug finding) should be displayed. Defaults to false.

### Examples

##### Scroll to header

    $("header").smoothScrollTop();

##### Scroll to element with id="textfield" in 1s

    $("#textfield").smoothScrollTop({
        duration: 1000
    });
    
## Tests

To run the test, execute <code>grunt test</code>.
JSHint and QUnit will be run.

## Minify

To create the *.min* version as well as the sourcemap, simply run <code>grunt</code>.

## How it came into being
When developing our own website we needed a smooth scrolling plugin. None of those we found was actually working. That's why we decided to develop our own jQuery plugin for that.  
Done by [@sgade](http://github.com/sgade). 
