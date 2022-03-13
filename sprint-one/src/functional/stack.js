var Stack = function() {
  var someInstance = {};
  var index = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.pop = function() {
    index--;
    var result = storage[index];
    delete storage[index];
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
