import { RequestHandler } from 'express';
import CampusModel from '../../model/campus';

const GetAllCampusRequestHandler: RequestHandler = async(req, res, next) => {
  try {
    const campuses = await CampusModel.GetAll();
    return res.status(200).json({
      results: campuses,
    });
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
}

export default GetAllCampusRequestHandler;
