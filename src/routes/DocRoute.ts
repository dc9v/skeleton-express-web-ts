import * as express from 'express';

const DocRoute = express.Router();

DocRoute.get('/test/:test', async (request: express.Request, response: express.Response, next: express.NextFunction) =>
{
  const attributes =
  {
    data: request.params.test
  };

  console.log("request.params.test", request.params.test);

  response.render('index');
});

DocRoute.get('/*', async (request: express.Request, response: express.Response, next: express.NextFunction) =>
{
  const attributes =
  {
    data: 1
  };

  console.log("request.url", request.url);
  console.log("request.params", request.params);

  response.render('index', attributes);
});



export default DocRoute;
