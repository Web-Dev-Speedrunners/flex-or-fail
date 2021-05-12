import { RequestHandler } from 'express';
import CampusModel from '../../model/campus';
import RequestError from '../../request/error';

const UpdateCampusRequestHandler : RequestHandler = async (req, res, next) => {
  try {
    const { campusId } = req.params;
    await CampusModel.Update(parseInt(campusId, 10), req.body);
    return res.status(200).json({
      message: 'Success',
    });
  } catch (error) {
    return next(new RequestError(400, error.message || 'Unable to update campus'));
  }
};

export default UpdateCampusRequestHandler;
