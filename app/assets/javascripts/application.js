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
	// init
	var controller = new ScrollMagic.Controller();

	// define movement of panels
	var wipeAnimation = new TimelineMax()
    .fromTo("section.panel.one", 1, {y: "0%"}, {y: "0%", ease: Linear.easeNone})  // in from left
		.fromTo("section.panel.two", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})  // in from left
		.fromTo("section.panel.three", 1, {y:  "100%"}, {y: "0%", ease: Linear.easeNone})  // in from right
		.fromTo("section.panel.four", 1, {y: "100%"}, {y: "-100%", ease: Linear.easeNone}); // in from top

	// create scene to pin and link animation
	new ScrollMagic.Scene({
      offset: 0,
			triggerElement: "#pinContainer",
			triggerHook: "onLeave",
			duration: "700%"
		})
		.setPin("#pinContainer")
		.setTween(wipeAnimation)
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
});
