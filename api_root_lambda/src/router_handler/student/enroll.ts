import { RequestHandler } from 'express';
import StudentModel from '../../model/student';
import logger from '../../util/logger';

const EnrollStudentRequestHandler: RequestHandler = async (req, res, next) => {
  const TAG = EnrollStudentRequestHandler.name;
  try {
    const { studentId } = req.params;
    const campusId = req.body.id;
    await StudentModel.EnrollStudent(studentId, campusId);
    return res.status(200).json();
  } catch (err) {
    logger.error(TAG, err);
    return next(err);
  }
};

export default EnrollStudentRequestHandler;
