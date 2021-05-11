import { RequestHandler } from 'express';
import CampusModel from '../../model/campus';
import logger from '../../util/logger';

const DeleteCampusRequestHandler: RequestHandler = async (req, res, next) => {
  const TAG = DeleteCampusRequestHandler.name;
  try {
    const { campusId } = req.params;
    await CampusModel.DeleteCampus(campusId);
    return res.status(200).json();
  } catch (err) {
    logger.error(TAG, err);
    return next(err);
  }
};

export default DeleteCampusRequestHandler;
