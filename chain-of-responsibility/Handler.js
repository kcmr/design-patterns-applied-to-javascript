export class Handler {
  constructor(next) {
    this.next = next;
  }

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
