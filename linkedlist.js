class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      this.tail.nextNode = new Node(value);
      this.tail = this.tail.nextNode;
    }
    this.size++;
  }
  toString() {
    let result = "";
    let current = this.head;
    while (current !== null) {
      result += "(" + current.value + ") -> ";
      current = current.nextNode;
    }
    return result + "null";
  }
  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }
  pop() {
    if (this.head === null) {
      return null;
    }
    let current = this.head;
    let previous = null;
    while (current.nextNode !== null) {
      previous = current;
      current = current.nextNode;
    }
    if (previous === null) {
      this.head = null;
      this.tail = null;
    } else {
      previous.nextNode = null;
      this.tail = previous;
    }
    this.size--;
    return current.value;
  }
  find(value) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      index++;
      current = current.nextNode;
    }
    return null;
  }
  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
  at(index) {
    if (index >= this.size) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current.value;
  }
}

function main() {
  let list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.prepend(4);
  console.log(list.toString());
  console.log(list.pop());
}

main();
