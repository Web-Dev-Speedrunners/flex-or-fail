import { APP_NAME } from '../constant/app';
import AppStage from '../constant/app_stage';

export const resourceName = (
  resource: string,
  stage: AppStage,
) : string => `${APP_NAME}--${resource}-${stage}${process.env.USER ? `-${process.env.USER}` : ''}`;
