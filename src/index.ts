import express from 'express';
import * as path from 'path';

import DocRoute from './routes/DocRoute';

const app = express();
const port = 3000;

app.use(express.json());
app.set("view engine", "ejs");
app.set('views', path.join(process.cwd(), 'ejs'));
app.use(express.static(path.join(process.cwd(), 'assets')));
app.use(express.urlencoded({ extended: true }))

app.use('/', DocRoute);

app.use(function (err: Error, request: express.Request, response: express.Response, next: express.NextFunction)
{
  console.error(err.stack);
  response.status(500).render('5xx');
});

app.use(function (request: express.Request, response: express.Response, next: express.NextFunction)
{
  response.status(404).render('4xx', { url: request.originalUrl });
});

app.listen(port, () =>
{
  return console.log(`http://localhost:${port}`);
});