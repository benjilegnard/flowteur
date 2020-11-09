/**
 * Folder routes are used to get the root folder and the details of a
 * each can take
 * /api/folder : gets the root of the media library.
 * /api/folder/{subpath}
 */
import * as express from 'express';

export class FolderResource {
  constructor(router: express.Router) {
    router.get(
      '/folder/',
      (request: express.Request, response: express.Response) => {
        let testData = {
          firstName: 'The',
          lastName: 'Burge',
        };
        response.send(testData);
      },
    );
    // add more route handlers here
    // e.g. customerRouter.post('/', (req,res,next)=> {/*...*/})
  }
}
