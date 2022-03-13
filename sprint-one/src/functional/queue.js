var Queue = function() {
  var someInstance = {};
  var storage = {};
  var index = 0;
  // Use an object with numeric keys to store values
  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() {
    var keyArray = Object.keys(storage);
    var smallestIndex = keyArray[0];
    keyArray.forEach(function(item) {
      var eachIndex = Number.parseInt(item);
      if (eachIndex < smallestIndex) {
        smallestIndex = eachIndex;
      }
    });

    var result = storage[smallestIndex];
    delete storage[smallestIndex];
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };
  return someInstance;
};
