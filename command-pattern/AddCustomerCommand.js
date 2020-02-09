import { Command } from './Command';

// A concrete Command that implements the command "interface"
// (there is no such thing in javascript, so it extends Command instead)
export class AddCustomerCommand extends Command {
  constructor(service) {
    super();
    this.service = service;
  }

  execute() {
    this.service.addCustomer();
  }
}
