import { RequestHandler } from 'express';
import StudentModel from '../../model/student';

const DeleteStudentRequestHandler: RequestHandler = async (req, res, next) => {
  try {
    await StudentModel.DeleteStudent(parseInt(req.params.studentId, 10));
    return res.status(200).json({
      message: 'Success!',
    });
  } catch (error) {
    return next(error);
  }
};

export default DeleteStudentRequestHandler;
