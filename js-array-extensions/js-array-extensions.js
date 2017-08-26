// your code here
var arrayExtentions = function () {
	this._storage = [];
	this.first = function (){
		return this._storage[0];
	}
	this.last = function (){
		return this._storage[this._storage.length - 1];
	}
}