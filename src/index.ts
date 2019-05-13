import * as express from 'express';

export class Core {
  app: Express.Application;

  constructor(app: Express.Application = express()) {
    this.app = app;
  }
}

export const Lightrail = {
  Core
};

export default Lightrail.Core;
