import { RequestHandler } from 'express';
import CampusModel from '../../model/campus';
import logger from '../../util/logger';

const GetCampusByStudentRequestHandler: RequestHandler = async (req, res, next) => {
  const TAG = GetCampusByStudentRequestHandler.name;
  try {
    const { studentId } = req.params;
    const campus = await CampusModel.GetCampusEnrolledIn(studentId);
    return res.status(200).json(campus);
  } catch (error) {
    logger.error(TAG, error);
    return next(error);
  }
};

export default GetCampusByStudentRequestHandler;
