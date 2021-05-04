import { Router } from 'express';
import EchoRouteHandler from '../router_handler/echo';

const router = Router();

router.route('/echo')
  .get(EchoRouteHandler)
  .post(EchoRouteHandler)
  .put(EchoRouteHandler)
  .delete(EchoRouteHandler);

router.route('/').get((_, res) => {
  res.status(200).json({ message: 'Campus Solution API' });
});

export default router;
