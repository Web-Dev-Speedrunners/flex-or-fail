import { RequestHandler } from 'express';
import StudentModel from '../../model/student';

const GetAllStudentRequestHandler : RequestHandler = async (req, res, next) => {
  try {
    const students = await StudentModel.GetAll();
    return res.status(200).json({
      result: students,
    });
  } catch (error) {
    return next(error);
  }
};

export default GetAllStudentRequestHandler;
