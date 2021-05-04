enum AppStage {
  Dev = 'dev',
  Prod = 'prod',
  Test = 'test'
}

function getAppStage() : AppStage {
  switch (process.env.NODE_ENV?.toLowerCase()) {
    case 'test':
      return AppStage.Test;
    case 'prod':
      return AppStage.Prod;
    default:
      return AppStage.Dev;
  }
}

export const CURRENT_STAGE = getAppStage();

export default AppStage;
