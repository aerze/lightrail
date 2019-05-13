import * as express from "express";

module Lightrail {
  export class Core {
    app: Express.Application;

    constructor(app: Express.Application = express()) {
      this.app = app;
    }
  }
}

export default Lightrail.Core;
