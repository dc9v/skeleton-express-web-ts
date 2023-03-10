import * as express from 'express';

const DocRoute = express.Router();

DocRoute.get('/:doc', async (request: express.Request, response: express.Response, next: express.NextFunction) =>
{
  const attributes =
  {
    data: 1
  };

  console.log(request.url);

  response.render('index', attributes);
});

export default DocRoute;
