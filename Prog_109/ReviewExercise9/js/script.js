// JavaScript Document
var window;
window.onload = function() {
	"use strict";
	var objButton = document.getElementById("button");

	var clickHandler = function() {
		
		// 1) Create nodelist and set class of each nodelist member to "hilite" below
		var list = document.getElementsByTagName("h3");
		var i;
		for (i = 0; i < list.length; i += 1) {
			list[i].classList.add("hilite");
		}
		// 2) Access <aside> element in HTML and replace the id attribute value with "bkgImage" below
		var element = document.getElementsByTagName("aside");
		element[0].id = "bkgImage";
		// 3) Access the element with class "subheader" and use the setAttribute method to 
		//    change its class to one of your own creation.  
		var sub = document.getElementsByClassName("subheader");
		sub[0].classList.add("subtitle");
	};

	objButton.onclick = clickHandler;

	// 4) Optional: Preload the "robot.jpg" image into this script and create the
	//    necessary event handling code to swap out the "homer.jpg" image file with
	//    the preloaded "robot.jpg" image when rolling over "homer.jpg". Also add
	//    event handling code to restore "homer.jpg" when rolling off the image. 
	var loadHandler = function() {
		picture.addEventListener("mouseover", rollOn, false);
		picture.addEventListener("mouseout", rollOff, false);
	};
	
	var picture = document.getElementById("rollover");
	var robot = new Image();
	var homer = new Image();
	robot.src = "images/robots.jpg";
	homer.src = "images/homer.jpg";
	homer.addEventListener("load", loadHandler, false);
	
	var rollOn = function() {
		picture.src = robot.src;
		
	};
	
	var rollOff = function() {
		picture.src = homer.src;
	};
	

};