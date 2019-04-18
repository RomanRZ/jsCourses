function Collection() {
  this.data = [];
  this.first = this.data[0];
  this.last = this.data[this.data.length - 1];
  this.length = this.data.length;
  this.isEmpty = this.data.length === 0;
}
Collection.prototype = {
  constructor: Collection,
  pickFirst: function() {
    let result = null;
    if (this.data.length) {
      result = this.data.shift();
      this.length--;
      if (!this.length) {
        this.isEmpty = true;
      }
    }
    return result;
  },
  pickLast: function() {
    let result = null;
    if (this.data.length) {
      result = this.data.pop();
      this.length--;
      if (!this.length) {
        this.isEmpty = true;
      }
    }
    return result;
  },
  insertFirst: function(el) {
    this.length++;
    this.data.unshift(el);
    this.first = this.data[0];
    this.last = this.data[this.data.length - 1];
    if (this.data.length) {
      this.isEmpty = false;
    }
  },
  insertLast: function(el) {
    this.length++;
    this.data.push(el);
    this.first = this.data[0];
    this.last = this.data[this.data.length - 1];
    if (this.data.length) {
      this.isEmpty = false;
    }
  },
  empty: function() {
    this.data.length = 0;
    this.isEmpty = true;
  }
};

function Queue() {
  this.queue = [];
  this.length = this.queue.length;
}
Queue.prototype = {
  constructor: Queue,
  getLength: function() {
    return this.queue.length;
  },
  enqueue: function(item) {
    this.queue.push(item);
    this.length++;
  },
  dequeue: function() {
    if (this.queue.length > 0) {
      this.length--;
    }
    return this.queue.shift();
  },
  empty: function() {
    this.queue.length = 0;
  }
};

function FixedArray(size) {
  this.array = new Array(size);
  this.length = this.array.length;
}
FixedArray.prototype = {
  constructor: FixedArray,
  insertAt: function(index, item) {
    if (index > this.length - 1) {
      throw new RangeError();
    }
    this.array.splice(index, 0, item);
  },
  getAt: function(index) {
    if (index > this.length - 1) {
      throw new RangeError();
    }
    return this.array.slice(index, index + 1);
  }
};

function Set() {
  this.set = [];
  this.length = 0;
}
Set.prototype = {
  constructor: Set,
  insert: function(item) {
    if (this.set.includes(item)) {
      return;
    }
    this.set.push(item);
    this.length++;
  },
  remove: function(item) {
    let index = this.set.findIndex(el => el === item);
    if (index >= 0) {
      this.set.splice(index, 1);
      this.length--;
    }
  },
  has: function(item) {
    return this.set.includes(item);
  },
  intersect: function(set) {
    const newSet = new Set();
    newSet.set = this.set.filter(el => {
      if (set.set.includes(el)) {
        return el;
      }
    });
    newSet.length = newSet.set.length;
    return newSet;
  },
  union: function(set) {
    const newSet = new Set();
    newSet.set = [...this.set, ...set.set].reduce((arr, el) => {
      if (!arr.includes(el)) {
        arr.push(el);
      }
      return arr;
    }, []);
    newSet.length = newSet.set.length;
    return newSet;
  }
};
