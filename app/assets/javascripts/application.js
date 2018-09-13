// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require ScrollMagic.min
//= require debug.addIndicators.min
//= require TweenMax
//= require animation.gsap.min
//= require_tree .

$(function() {

  // var controller = new ScrollMagic.Controller({
  //   globalSceneOptions: {
  //     triggerHook: 'onLeave'
  //   }
  // });
  //
  // var slides = document.querySelectorAll("section.panel");
  //
  // for (var i=0; i<slides.length; i++ ) {
  //   new ScrollMagic.Scene({
  //     triggerElement: slides[i]
  //   })
  //   .setPin(slides[i])
  //   .addIndicators()
  //   .addTo(controller);
  // }

	// init
	var controller = new ScrollMagic.Controller();

	// define movement of panels
	var wipeAnimation = new TimelineMax()
    .fromTo("section.panel.blue", 1, {y: "0%"}, {y: "0%", ease: Linear.easeNone})  // in from left
		.fromTo("section.panel.pink", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})  // in from left
		.fromTo("section.panel.purple", 1, {y:  "100%"}, {y: "0%", ease: Linear.easeNone})  // in from right
		.fromTo("section.panel.green", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

	// create scene to pin and link animation
	new ScrollMagic.Scene({
			triggerElement: "#pinContainer",
			triggerHook: "onLeave",
			duration: "300%"
		})
		.setPin("#pinContainer")
		.setTween(wipeAnimation)
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
});
