var $viewport = jQuery(someSelector);
var callback = function () {console.log('calla back yo')}

/**
 * Basics
 */

//using options
var properties = {
  width: '500px',
  paddingLeft: '2px'
  //[property3: value3]
  //[property4: value4]
  //[property5: value5]
}
var options = {
  duration: 400,
  easing: 'swing',
  queue: Boolean,//'true' default
  display: "block"//'auto' default, 'inline', etc.
  begin: Function(elements),
  progress: Function(elements),
  complete: Function(elements),//callback
  display: Function(elements),
  visibility: Function(elements),
  loop: Boolean || Number,//'false' default. 'true' is infinite looping
  delay: Boolean || Number,//'false' default
}

$viewport.velocity(properties, options);

/**
 * Novice
 */

properties = { 
  top: 50,  //Defaults to the px unit type
  left: "50%",
  width: "+=5rem",  //Add 5rem to the current rem value
  height: "*=2"  //Double the current height
}

$viewport.velocity(properties);

/**
 * Advanced
 */

properties = {
  borderBottomWidth: [ '2px', 'spring' ], // Uses 'spring'
  width: [ '100px', [ 250, 15 ] ], // Uses custom spring physics
  height: '100px' // Defaults to easeInSine, the call's default easing
}
options = {
  easing: [1000, 20] //spring physics
}

$viewport.velocity(propertise, options);

/**
 * Scrolling animations
 */

$viewport.velocity('scroll', { 
  container: $('#container')
});

/**
 * Velocity-chaining
 */

$viewport
  .delay(500)
  .velocity({x: '+=200', y: '25%'})
  .velocity({fillGreen: 255, strokeWidth: 2})
  .velocity({height: 50, width: 50})
  .velocity({rotateZ: 90, scaleX: 0.5})
  .velocity('reverse', { delay: 250 });

/**
 * Comma-separated arguments a lá jQuery
 */

$viewport.velocity({ top: 50 }, 1000);
$viewport.velocity({ top: 50 }, 1000, 'swing', callback);
$viewport.velocity({ top: 50 }, 'swing', callback);