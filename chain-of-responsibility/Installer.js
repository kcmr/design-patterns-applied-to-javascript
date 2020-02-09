import { Handler } from './Handler';

export class Installer extends Handler {
  constructor(next) {
    super(next);
  }

  doHandle(component) {
    console.log('Installing component dependencies…');

    return false;
  }
}
