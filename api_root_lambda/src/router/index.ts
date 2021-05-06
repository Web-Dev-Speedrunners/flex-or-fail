import { Router } from 'express';
import EchoRouteHandler from '../router_handler/echo';
import CreateStudentRequestHandler from '../router_handler/student/create';
import GetAllStudentRequestHandler from '../router_handler/student/get_all';
import CreateCampusRequestHandler from '../router_handler/campus/create';
import GetAllCampusRequestHandler from '../router_handler/campus/get_all';

const router = Router();

router.route('/echo')
  .get(EchoRouteHandler)
  .post(EchoRouteHandler)
  .put(EchoRouteHandler)
  .delete(EchoRouteHandler);

router.route('/student')
  .get(GetAllStudentRequestHandler)
  .post(CreateStudentRequestHandler);

router.route('/campus')
  .get(GetAllCampusRequestHandler)
  .post(CreateCampusRequestHandler);

router.route('/').get((_, res) => {
  res.status(200).json({ message: 'Campus Solution API' });
});

export default router;
