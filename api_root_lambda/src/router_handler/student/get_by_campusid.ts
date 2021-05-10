import { RequestHandler } from 'express';
import StudentModel from '../../model/student';
import logger from '../../util/logger';

const GetAllStudentsByCampusRequestHandler: RequestHandler = async (req, res, next) => {
  const TAG = GetAllStudentsByCampusRequestHandler.name;
  try {
    const { campusId } = req.params;
    const students = await StudentModel.GetStudentsInCampus(campusId);
    return res.status(200).json({
      result: students,
    });
  } catch (err) {
    logger.error(TAG, err);
    return next(err);
  }
}

export default GetAllStudentsByCampusRequestHandler;
