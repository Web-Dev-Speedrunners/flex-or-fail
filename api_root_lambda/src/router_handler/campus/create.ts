import { RequestHandler } from 'express';
import CampusModel from '../../model/campus';

const CreateCampusRequestHandler: RequestHandler = async (req, res, next) => {
  try {
    const campus = await CampusModel.CreateCampus(req.body);
    return res.status(201).json(campus);
  } catch (err) {
    console.error(err.message);
    return next(err);
  }
}

export default CreateCampusRequestHandler;
