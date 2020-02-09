import { Handler } from './Handler';

export class Publisher extends Handler {
  constructor(next) {
    super(next);
  }

  doHandle(component) {
    console.log('Packing and publishing component…');

    return false;
  }
}
