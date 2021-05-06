import { RequestHandler } from 'express';
import StudentModel from '../../model/student';

const CreateStudentRequestHandler : RequestHandler = async (req, res, next) => {
  try {
    console.log(req.body);
    const student = await StudentModel.CreateStudent(req.body);
    return res.status(201).json(student);
  } catch (error) {
    return next(error);
  }
};

export default CreateStudentRequestHandler;
