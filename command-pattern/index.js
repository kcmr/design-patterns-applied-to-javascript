import { CustomerService } from './CustomerService';
import { AddCustomerCommand } from './AddCustomerCommand';
import { Button } from './Button';

const service = new CustomerService();
const command = new AddCustomerCommand(service);
const button = new Button(command);

button.click();
