import * as express from 'express';

const DocRoute = express.Router();

DocRoute.get('/', async (request: express.Request, response: express.Response, next: express.NextFunction) =>
{
  const attributes =
  {
    data: 1
  };

  response.render('index', attributes);
});

export default DocRoute;
