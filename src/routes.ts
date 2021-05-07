import { Router } from 'express';

const routes = Router();

routes.get('/user', (request, response) => response.json({
  name: "Fabiane",
  age: "25"
}));

export default routes;