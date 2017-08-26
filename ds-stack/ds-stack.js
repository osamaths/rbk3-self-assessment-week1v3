var Stack = function() {
    this._storage = [];
    this.add = function(value){
      // write me
      this._storage.unshift(value); // add to the first index.
    };
    this.remove = function() {
      // write me
      return this._storage.shift(); // remove from the first index.
    };
  };