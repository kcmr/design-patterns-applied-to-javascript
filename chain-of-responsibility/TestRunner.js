import { Handler } from './Handler';

export class TestRunner extends Handler {
  constructor(next) {
    super(next);
  }

  doHandle(component) {
    console.log('Testing component…');

    return false;
  }
}
