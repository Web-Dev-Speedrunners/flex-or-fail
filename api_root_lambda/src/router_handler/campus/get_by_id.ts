import { RequestHandler } from 'express';
import CampusModel from '../../model/campus';
import logger from '../../util/logger';

const GetCampusByIdRequestHandler : RequestHandler = async (req, res, next) => {
  const TAG = GetCampusByIdRequestHandler.name;
  try {
    const campus = await CampusModel.GetById(req.params.campusId);
    return res.status(200).json(campus);
  } catch (error) {
    logger.error(TAG, error);
    return next(error);
  }
};

export default GetCampusByIdRequestHandler;
