import { getCurrentInvoke } from '@vendia/serverless-express';
import { ErrorRequestHandler } from 'express';

const errorRequestHandler : ErrorRequestHandler = (error, request, response, _next) => {
  console.log('Error');
  console.error(error);
  console.log('Request');
  console.log(request);
  console.log('Event');
  console.log(JSON.stringify(getCurrentInvoke().event, null, '\t'));
  return response.status(error.status || 500).json({
    error: {
      message: error.message || 'Oops! Something went wrong.',
    },
  });
};

export default errorRequestHandler;
