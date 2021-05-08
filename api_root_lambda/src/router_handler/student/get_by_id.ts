import { RequestHandler } from 'express';
import StudentModel from '../../model/student';
import logger from '../../util/logger';

const GetStudentByIdRequestHandler : RequestHandler = async (req, res, next) => {
  const TAG = GetStudentByIdRequestHandler.name;
  try {
    const student = await StudentModel.GetById(req.params.studentId);
    return res.status(200).json(student);
  } catch (error) {
    logger.error(TAG, error);
    return next(error);
  }
};

export default GetStudentByIdRequestHandler;
