import Joi from 'joi';

export const GPAValidator = Joi.number().min(0).max(4);
export const EMAILValidator = Joi.string().email();

export const CreateStudentValidator = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  gpa: GPAValidator.required(),
  email: EMAILValidator.required(),
  imageUrl: Joi.string().optional(),
});

export const CreateCampusValidator = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  description: Joi.string().required(),
  imageUrl: Joi.string().optional(),
});
