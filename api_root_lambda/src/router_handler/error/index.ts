import { getCurrentInvoke } from '@vendia/serverless-express';
import { ErrorRequestHandler } from 'express';
import AppStage, { CURRENT_STAGE } from '../../constant/app_stage';
import logger from '../../util/logger';

const errorRequestHandler : ErrorRequestHandler = (error, request, response, _next) => {
  const TAG = errorRequestHandler.name;
  logger.error(TAG, 'error');
  logger.error(TAG, error);
  if (CURRENT_STAGE !== AppStage.Local) {
    logger.error(TAG, 'Request');
    logger.error(TAG, request);
    logger.error(TAG, 'Event');
    logger.error(TAG, JSON.stringify(getCurrentInvoke().event, null, '\t'));
  }
  return response.status(error.status || 500).json({
    error: {
      message: error.message || 'Oops! Something went wrong.',
    },
  });
};

export default errorRequestHandler;
