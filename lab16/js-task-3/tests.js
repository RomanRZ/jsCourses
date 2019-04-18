QUnit.module("Collection");
QUnit.test("first", function(assert) {
  var collection = new Collection();
  collection.insertLast("foo");
  collection.insertLast("bar");
  collection.insertLast("baz");

  assert.equal(collection.first, "foo");
});

QUnit.test("last", function(assert) {
  var collection = new Collection();
  collection.insertLast("foo");
  collection.insertLast("bar");
  collection.insertLast("baz");
  assert.equal(collection.last, "baz");
});

QUnit.test("length", function(assert) {
  var collection = new Collection();
  collection.insertLast("foo");
  collection.insertLast("bar");
  collection.insertLast("baz");

  assert.equal(collection.length, 3);
});

QUnit.test("isEmpty", function(assert) {
  var collection = new Collection();

  assert.ok(collection.isEmpty);

  collection.insertLast("foo");
  collection.insertLast("bar");
  collection.insertLast("baz");

  assert.ok(!collection.isEmpty);
});

QUnit.test("pickFirst()", function(assert) {
  var collection = new Collection();
  collection.insertLast("foo");
  collection.insertLast("bar");
  collection.insertLast("baz");

  assert.equal(collection.pickFirst(), "foo");
  assert.equal(collection.length, 2);
});

QUnit.test("pickLast()", function(assert) {
  var collection = new Collection();
  collection.insertLast("foo");
  collection.insertLast("bar");
  collection.insertLast("baz");

  assert.equal(collection.pickLast(), "baz");
  assert.equal(collection.length, 2);
});

QUnit.test("insertFirst()", function(assert) {
  var collection = new Collection();
  collection.insertFirst("foo");
  collection.insertFirst("bar");
  collection.insertFirst("baz");

  assert.equal(collection.first, "baz");
  assert.equal(collection.last, "foo");
});

QUnit.test("insertLast()", function(assert) {
  var collection = new Collection();
  collection.insertLast("foo");
  collection.insertLast("bar");
  collection.insertLast("baz");

  assert.equal(collection.first, "foo");
  assert.equal(collection.last, "baz");
});

QUnit.test("empty()", function(assert) {
  var collection = new Collection();
  collection.insertLast("foo");
  collection.insertLast("bar");
  collection.insertLast("baz");
  collection.empty();

  assert.ok(collection.isEmpty);
});

QUnit.module("Queue");
QUnit.test("enqueue(item)", function(assert) {
  var queue = new Queue();

  assert.equal(queue.length, 0);

  queue.enqueue("foo");
  queue.enqueue("bar");
  queue.enqueue("baz");

  assert.equal(queue.length, 3);
});

QUnit.test("dequeue()", function(assert) {
  var queue = new Queue();
  queue.enqueue("foo");
  queue.enqueue("bar");
  queue.enqueue("baz");

  assert.equal(queue.dequeue(), "foo");
  assert.equal(queue.dequeue(), "bar");
  assert.equal(queue.dequeue(), "baz");
});

QUnit.module("FixedArray");
QUnit.test("length", function(assert) {
  var arr = new FixedArray(5);

  assert.equal(arr.length, 5);
});

QUnit.test("insertAt(index, item)", function(assert) {
  var arr = new FixedArray(2);

  var result;
  try {
    arr.insertAt(0, "foo");
    arr.insertAt(1, "bar");

    result = true;
  } catch (e) {
    result = false;
  }

  assert.ok(result);

  assert.throws(function() {
    arr.insertAt(2, "baz");
  }, RangeError);
});

QUnit.test("getAt(item)", function(assert) {
  var arr = new FixedArray(2);
  arr.insertAt(0, "foo");
  arr.insertAt(1, "bar");

  var result;

  try {
    arr.getAt(0);
    arr.getAt(1);

    result = true;
  } catch (e) {
    result = false;
  }

  assert.ok(result);

  assert.throws(function() {
    arr.getAt(2);
  }, RangeError);
});

QUnit.module("Set");
QUnit.test("length / insert(item)", function(assert) {
  var set = new Set();
  set.insert("foo");
  set.insert("bar");
  set.insert("foo");

  assert.equal(set.length, 2);
});

QUnit.test("remove(item)", function(assert) {
  var set = new Set();
  set.insert("foo");
  set.insert("bar");
  set.insert("foo");

  set.remove("foo");
  set.remove("bar");

  assert.equal(set.length, 0);
});

QUnit.test("has(item)", function(assert) {
  var set = new Set();
  set.insert("foo");
  set.insert("bar");

  set.remove("bar");

  assert.ok(set.has("foo"));
  assert.ok(!set.has("bar"));
});

QUnit.test("intersect(set)", function(assert) {
  var set1 = new Set();
  set1.insert("foo");
  set1.insert("bar");

  var set2 = new Set();
  set2.insert("bar");
  set2.insert("baz");

  var set3 = set1.intersect(set2);

  assert.equal(set1.length, 2);
  assert.equal(set2.length, 2);
  assert.equal(set3.length, 1);
  assert.ok(set3.has("bar"));
});

QUnit.test("union(set)", function(assert) {
  var set1 = new Set();
  set1.insert("foo");
  set1.insert("bar");

  var set2 = new Set();
  set2.insert("bar");
  set2.insert("baz");

  var set3 = set1.union(set2);

  assert.equal(set1.length, 2);
  assert.equal(set2.length, 2);
  assert.equal(set3.length, 3);
  assert.ok(set3.has("foo"));
  assert.ok(set3.has("bar"));
  assert.ok(set3.has("baz"));
});
