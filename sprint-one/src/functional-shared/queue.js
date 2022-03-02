var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.index = 0;

  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function(value) {
  var keyArr = Object.keys(this.storage);
  var smallest = keyArr[0];
  keyArr.forEach(function(item) {
    if (item < smallest) {
      smallest = item;
    }
  });
  var result = this.storage[smallest];
  delete this.storage[smallest];
  return result;
};

queueMethods.size = function(value) {
  return Object.keys(this.storage).length;
};



