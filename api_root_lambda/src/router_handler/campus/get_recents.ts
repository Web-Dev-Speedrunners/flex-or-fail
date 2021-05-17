import { RequestHandler } from 'express';
import CampusModel from '../../model/campus';
import logger from '../../util/logger';

const GetRecentCampusesRequestHandler: RequestHandler = async (req, res, next) => {
  const TAG = GetRecentCampusesRequestHandler.name;
  try {
    const { limit } = req.query;
    const queryLimit = limit ? parseInt(limit as string, 10) : undefined;
    const recentCampuses = await CampusModel.GetRecentCampuses(queryLimit);
    return res.status(200).json({
      results: recentCampuses,
    });
  } catch (error) {
    logger.error(TAG, error);
    return next(error);
  }
};

export default GetRecentCampusesRequestHandler;
