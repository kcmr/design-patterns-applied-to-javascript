// The invoker through the command
export class Button {
  constructor(command) {
    this.command = command;
  }

  click() {
    this.command.execute();
  }
}
