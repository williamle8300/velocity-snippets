# Dependencies
- jQuery (must be linked before Velocity)

# Basics
```javascript
var $viewport = jQuery(someSelector);
$viewport.velocity(properties, options);
```
```javascript
var properties = {
  width:          500,//or '500px', Velocity uses the natural unit
  paddingLeft:    '2px',
  //property3:    value3,
  //property4:    value4,
  //property5:    value5
}
var options = {
  duration:       400,
  easing:         'swing',
  queue:          Boolean,//'true' default
  display:        "block"//'auto' default, 'inline', etc.
  begin:          Function($elements),
  progress:       Function($elements),
  complete:       Function($elements),//callback
  display:        Function($elements),
  visibility:     Function($elements),
  loop:           Boolean || Number,//'false' default. 'true' is infinite looping
  delay:          Boolean || Number//'false' default
}

```

# Gotchas
 - Animations are run sequentially (only runs after previous animation has completed)
 - You don't have to use the chaining syntax for the animations to be queued properly. They can be separate statements
 - "display: none" or "visibility: hidden" always gets applied after animation completes, while "display: block" or "visibility: visible" applies before animation begins
 - Set "queue" to false in the options start immediately regardless of current animations in queued
 - An easier way to think about "loops" in options, is a setting defining how many times to return back to it's old css styles. Setting 'true', makes the animation infinite. Use the 'stop' command to stop animation (ex: $('div').velocity("stop"))
 - using "delay" and "loop" together means a delay for each loop
 - If a unit is left out, it defaults to the natural unit (ex: "200" becomes "200px" for divs, "deg" for "rotateX")
 - Don't use shorthand attributes (ex: use "paddingLeft" not "padding")
 - Velocity does vendor prefixes (ex: just use "transform," not "-webkit-transform")
 - Use the "utility syntax" to reveal promises API:
 ```javascript
 $.Velocity($selector, properties, options);
 ```
 - Need to weave some asynchrony into Velocity's animations? Use their "utility" pattern which exposes a "promised" interface: 
```javascript
jQuery.Velocity.animate($element, {opacity: 0.5})
  .then(function($elements) {console.log("Resolved.");})
  .catch(function(error) {console.log("Rejected.");});
```