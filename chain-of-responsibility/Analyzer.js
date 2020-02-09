import { Handler } from './Handler';

export class Analyzer extends Handler {
  constructor(next) {
    super(next);
  }

  doHandle(component) {
    console.log('Linting component…');

    return false;
  }
}
