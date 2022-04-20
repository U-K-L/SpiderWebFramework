(function ($global) { "use strict";
var Main = function() { };
Main.main = function() {
	var canvas = window.document.getElementById("webgl");
	var gl = canvas.getContext("webgl2",null);
	gl.viewport(0,0,gl.canvas.width,gl.canvas.height);
	gl.clearColor(0.0,0.0,0.0,1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
Main.main();
})({});
