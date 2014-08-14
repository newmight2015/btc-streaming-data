// SERVER
var Room = function(io, options){
	this.io = io;
	this.options = options;
	this.init();
};

Room.prototype = {
	init: function(){
		this.io.sockets.in(this.options)
			.on("join", this.on_join.bind(this))
			.on("leave", this.on_leave.bind(this));
	},
	on_join: function(){

	},
	on_leave: function(){

	}
};

module.exports = Room;