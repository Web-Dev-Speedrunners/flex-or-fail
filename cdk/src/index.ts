#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import AppStack from './stack/root_stack';
import AppStage, { CURRENT_STAGE } from './constant/app_stage';
import { APP_NAME } from './constant/app';

const app = new cdk.App();
// eslint-disable-next-line no-new
new AppStack(app, `${APP_NAME}-${CURRENT_STAGE}`, {
  stage: CURRENT_STAGE,
  terminationProtection: CURRENT_STAGE === AppStage.Prod,
});
