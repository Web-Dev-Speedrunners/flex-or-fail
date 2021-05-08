import { RequestHandler } from "express";
import StudentModel from "../../model/student";
import logger from "../../util/logger";

const UnenrollStudentRequestHandler: RequestHandler = async (req, res, next) => {
  const TAG = UnenrollStudentRequestHandler.name;
  try {
    const studentId = req.params.studentId;
    await StudentModel.UnenrollStudent(studentId);
    return res.status(200).json();
  } catch (err) {
    logger.error(TAG, err);
    return next(err);
  }
}

export default UnenrollStudentRequestHandler;
