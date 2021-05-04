import { getCurrentInvoke } from '@vendia/serverless-express';
import { RequestHandler } from 'express';

const EchoRouteHandler : RequestHandler = (_, res) => {
  res.status(200).json({
    event: getCurrentInvoke().event,
  });
};

export default EchoRouteHandler;
