var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.index = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.index] = value;
  this.index++;
};

stackMethods.pop = function () {

  this.index--;
  var result = this.storage[this.index];
  delete this.storage[this.index];
  return result;

};

stackMethods.size = function () {
  return Object.keys(this.storage).length;
};

