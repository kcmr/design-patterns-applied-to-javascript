export class Handler {
  constructor(next) {
    this.next = next;
  }

  // Example of a template method
  handle(component) {
    if (this.doHandle(component)) {
      return;
    }

    if (this.next) {
      this.next.handle(component);
    }
  }

  /**
   * "Abstract" method to be implemented by subclasses
   */
  doHandle(component) {}
}
