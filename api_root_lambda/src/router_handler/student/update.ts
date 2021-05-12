import { RequestHandler } from 'express';
import StudentModel from '../../model/student';
import RequestError from '../../request/error';

const UpdateStudentRequestHandler : RequestHandler = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    await StudentModel.UpdateStudent(parseInt(studentId, 10), req.body);
    return res.status(200).json({
      message: 'Success',
    });
  } catch (error) {
    return next(new RequestError(400, error.message || 'Unable to update student'));
  }
};

export default UpdateStudentRequestHandler;
