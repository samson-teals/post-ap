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
    let oldCurrent = null;
    let current = this.list;

    while (current) {
      let next = current.next;
      current.next = oldCurrent;

      oldCurrent = current;
      current = next;
    }

    this.list = oldCurrent;

    return this;
  }

  // recursively reverse a list starting from element
  // - element should only be non-null on a recursive call
  // - return element
  recursive_reverse(element) {
    if (element.next === null) {
      this.list = element;
      return element;
    }

    // note that lastElementOfReversedSublist is the same as element.next
    // - we could have done lastElementOfReversedSublist = element.next before
    //   the recursive call and then returned "this" for convenience
    let lastElementOfReversedSublist = this.recursive_reverse(element.next);
    lastElementOfReversedSublist.next = element;
    element.next = null;

    return element;
  }

  // wrapper for recursive_reverse so that we don't need to pass "null" to recursive_reverse
  recursive_reverse_wrapper() {
    return this.recursive_reverse(this.list);
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

    let length = this.count();
    let half = Math.floor(length / 2);

    let count = 1;
    let current = this.list;
    while (current) {
      if (count >= half) {
        newList.list = current.next;
        current.next = null;
        //break;
      }

      current = current.next;
      count++;
    }

    return newList;
  }

  // ordered merge of two lists
  // - assume that each sublist is already ordered
  // - e.g. AC, BD --> ABCD
  // - return this
  ordered_merge(list2) {
    let merged = null;
    let newHead = null;
    let insertMerged = function(element) {
      if (merged === null) {
        merged = element;
        newHead = merged;
      }
      else {
        merged.next = element;
        merged = merged.next;
      }

      merged.next = null;
    }

    let current1 = this.list;
    let current2 = list2.list;
    while (current1 || current2) {
      let use1or2 = null;
      if (current1 && current2) {
        if (current1.data < current2.data) {
          use1or2 = 1;
        }
        else {
          use1or2 = 2;
        }
      }
      else if (current1) {
        use1or2 = 1;
      }
      else {
        use1or2 = 2;
      }

      if (use1or2 == 1) {
        let next = current1.next;
        insertMerged(current1);

        current1 = next;
      }
      else {
        let next = current2.next;
        insertMerged(current2);

        current2 = next;
      }
    }

    this.list = newHead;

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

let list1 = new llist('a b c d e');
list1.print();

let list2 = list1.split();
list1.print();
list2.print();

new llist('a d').ordered_merge(new llist('b c')).print();
new llist('x y').ordered_merge(new llist()).print();

new llist('x z y a c b').merge_sort().print();
new llist('q w e r t y').merge_sort().print();