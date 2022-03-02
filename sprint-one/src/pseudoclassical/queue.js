var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.index = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function () {
  var keyArr = Object.keys(this.storage);
  var smallest = keyArr[0];
  keyArr.forEach(function (item) {
    if (item < smallest) {
      smallest = item;
    }
  });

  var result = this.storage[smallest];
  delete this.storage[smallest];
  return result;
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};


