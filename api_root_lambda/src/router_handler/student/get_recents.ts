import { RequestHandler } from 'express';
import StudentModel from '../../model/student';
import logger from '../../util/logger';

const GetRecentStudentsRequestHandler: RequestHandler = async (req, res, next) => {
  const TAG = GetRecentStudentsRequestHandler.name;
  try {
    const { limit } = req.query;
    const queryLimit = limit ? parseInt(limit as string, 10) : undefined;
    const recentStudents = await StudentModel.GetRecentStudents(queryLimit);
    return res.status(200).json({
      results: recentStudents,
    });
  } catch (error) {
    logger.error(TAG, error);
    return next(error);
  }
};

export default GetRecentStudentsRequestHandler;
