// linked list element - these are contained inside an llist (linked list)
class llElement {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// linked list container
// - contains a list of llElements, and the methods to manipulate the linked list
// - llElements are "linked" together to form a linked list
class llist {
  constructor(data = '') {
    this.init(data);
  }

  // initialize with test data
  test_init() {
    this.list = new llElement(
      'a',
      new llElement(
        'b',
        new llElement(
          'c',
          null
        )
      )
    );

    return this;
  }

  // initialize the list from a space-separated string
  init(spaceSeparatedString) {
    this.list = null;

    if (spaceSeparatedString.trim() !== '') {
      let current = this.list;
      let elements = spaceSeparatedString.split(' ');
      for (const element of elements) {
        current = this.insert(element, current);
      }
    }

    return this;
  }

  // print the data in the list
  print() {
    let buf = [];

    let current = this.list;
    while (current) {
      buf.push(current.data);
      current = current.next;
    }

    let joined = buf.join(", ");
    console.log(joined);

    return joined;
  }

  // count number of elements
  count() {
    let count = 0;

    let current = this.list;
    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  // search for element with value "data"
  // - return an llElement, or null if not found
  find(data) {
    let current = this.list;
    while (current) {
      if (current.data == data) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  // insert "data" after element
  // - insert before the beginning of the list if element is null
  // - return the newly created element
  insert(data, element = null) {
    let newElement = null;

    if (element === null) {
      const oldNext = this.list;
      newElement = new llElement(data, oldNext);
      this.list = newElement;
    }
    else {
      const oldNext = element.next;
      newElement = new llElement(data, oldNext);
      element.next = newElement;
    }

    return newElement;
  }

  // insert "data" at the end of the list
  push(data) {
    if (this.list === null) {
      return this.insert(data, null);
    }

    let oldCurrent = null;
    let current = this.list;
    while (current) {
      oldCurrent = current;
      current = current.next;
    }

    newElement = new llElement(data, null);
    oldCurrent.next = newElement;

    return newElement;
  }

  // another variant of "push"
  push2(data) {
    if (this.list === null) {
      return this.insert(data, null);
    }

    let current = this.list;
    while (current) {
      if (current.next === null) {
          break;
      }

      current = current.next;
    }

    newElement = new llElement(data, null);
    current.next = newElement;

    return newElement;
  }

  // delete element
  // - use "===" to compare two objects
  delete(element) {
    // implement
  }

  // reverse a list - iterative version
  // - return this
  reverse() {
    // implement

    return this;
  }

  // recursively reverse a list starting from element
  // - element should only be non-null on a recursive call
  // - return this
  recursive_reverse(element = null) {
    // implement

    return this;
  }

  // join two lists together
  // - return the current list with the new list joined onto the end
  // - e.g. AB, CD --> ABCD
  // - return this
  concat(list2) {
    // implement

    return this;
  }

  // return a new list with half the elements of this list
  // - the "other" half is contained in "this" list
  // - you can choose to interleave elements, or split them
  //   e.g. ABCD --> AB, CD; or AC, BD
  split() {
    let newList = new llist();

    // implement

    return newList;
  }

  // ordered merge of two lists
  // - assume that each sublist is already ordered
  // - e.g. AC, BD --> ABCD
  // - return this
  ordered_merge(list2) {
    // implement

    return this;
  }

  // merge sort this list
  // - return this
  // - the merge sort algorithm is:
  //   - split list into 2 sublists
  //     - merge sort each sublist
  //   - join the two sorted sublists
  //   - return the joined list
  //
  // note: lists with 0 or 1 elements are sorted by definition
  merge_sort() {
    // implement

    return this;
  }
}

let test = new llist().test_init();
test.print();
console.log(test.count());

test.push('x');
test.push2('y');
test.insert('0', null);
test.insert('d', test.find('c'));
test.insert('z', test.find('y'));
test.print();

let l1 = new llist('a d c b');
l1.print();