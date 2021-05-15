import { Router } from 'express';
import EchoRouteHandler from '../router_handler/echo';
import CreateStudentRequestHandler from '../router_handler/student/create';
import GetAllStudentRequestHandler from '../router_handler/student/get_all';
import CreateCampusRequestHandler from '../router_handler/campus/create';
import GetAllCampusRequestHandler from '../router_handler/campus/get_all';
import GetStudentByIdRequestHandler from '../router_handler/student/get_by_id';
import GetCampusByIdRequestHandler from '../router_handler/campus/get_by_id';
import EnrollStudentRequestHandler from '../router_handler/student/enroll';
import UnenrollStudentRequestHandler from '../router_handler/student/unenroll';
import GetAllStudentsByCampusRequestHandler from '../router_handler/campus/get_students_by_campusid';
import DeleteCampusRequestHandler from '../router_handler/campus/delete';
import UpdateCampusRequestHandler from '../router_handler/campus/update_campus';
import UpdateStudentRequestHandler from '../router_handler/student/update';
import GetRecentStudentsRequestHandler from '../router_handler/student/get_recents';
import GetRecentCampusesRequestHandler from '../router_handler/campus/get_recents';

const router = Router();

router.route('/echo')
  .get(EchoRouteHandler)
  .post(EchoRouteHandler)
  .put(EchoRouteHandler)
  .delete(EchoRouteHandler);

router.route('/student')
  .get(GetAllStudentRequestHandler)
  .post(CreateStudentRequestHandler);

router.route('/student/recent')
  .get(GetRecentStudentsRequestHandler);

router.route('/student/:studentId')
  .get(GetStudentByIdRequestHandler)
  .patch(UpdateStudentRequestHandler);

router.route('/student/:studentId/enroll')
  .post(EnrollStudentRequestHandler);

router.route('/student/:studentId/unenroll')
  .post(UnenrollStudentRequestHandler);

router.route('/campus')
  .get(GetAllCampusRequestHandler)
  .post(CreateCampusRequestHandler);

router.route('/campus/recent')
  .get(GetRecentCampusesRequestHandler);

router.route('/campus/:campusId')
  .get(GetCampusByIdRequestHandler)
  .delete(DeleteCampusRequestHandler)
  .patch(UpdateCampusRequestHandler);

router.route('/campus/:campusId/students')
  .get(GetAllStudentsByCampusRequestHandler);

router.route('/').get((_, res) => {
  res.status(200).json({ message: 'Campus Solution API' });
});

export default router;
