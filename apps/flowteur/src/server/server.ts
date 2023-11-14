// main server entry point :
// runs a rest api, and angular universal rendering.
//
// Angular requires Zone.js
// import 'zone.js/node';

// import { ngExpressEngine } from '@angular/ssr';

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import * as fs from 'fs';
import { FileResource, FolderResource, ProbeResource } from './resource';

const server: express.Application = express();

class FlowteurServer {
  /**
   * @param app - express application
   * @param port - port to listen on
   */
  constructor(private app: express.Express, private port: number) {
    this.configureMiddleware(app);
    this.configureRoutes(app);
  }

  /**
   * @param app - express application
   */
  private configureMiddleware(app: express.Express) {
    // app.use(requestLogger);
  }

  private configureRoutes(app: express.Express) {
    const router = express.Router();
    const fileRoutes = new FileResource(express.Router());
    const folderRoutes = new FolderResource(express.Router());
    const probeRoutes = new ProbeResource(express.Router());
    app.use('/api', router);
    // mount more routers here
    // e.g. app.use("/organisation", organisationRouter);
  }

  public run() {
    this.app.listen(this.port);
  }
}

module.exports = server;
