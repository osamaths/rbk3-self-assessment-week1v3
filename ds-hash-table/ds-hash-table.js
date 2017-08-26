var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) {
        if(!Array.isArray(this._storage[hashFn(key, max)]))// check if the index is having only one item.
        {
         return this._storage[hashFn(key, max)];
        }
        else // check if the index is an array.
        {
          var targetArray = this._storage[hashFn(key, max)];

          for (var i = 0; i < targetArray.length; i++) { // iterate all elements.
            if(targetArray[i][0] === key) // if the element has the key in its zero index.
            {
              return targetArray[i][1];
            }
          }
            return targetArray[0]; // if the element does not have the key in its zero idex, becuase that it was the first element stored.
        }      
      },

      insert: function(key, value) {
        //your code is here
        var index = hashFn(key, max);
        if(this._storage[index] !== undefined)// check if there is values in this index.
        {
          if(!Array.isArray(this._storage[index]))// check if the index is having only one item or this is the second time we use.
          {
            var oldValue = this._storage[index];
            this._storage[index] = [];
            this._storage[index].push(oldValue);
            this._storage[index].push([key, value]);// store an array with key and value.
          }
          else // check if the index is an array or this the third time we use.
          {
            this._storage[index].push([key, value]);
          }
        }
        else
        {
          this._storage[index] = value;
        }
    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};