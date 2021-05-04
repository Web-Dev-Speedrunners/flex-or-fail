# App Backend

[![CircleCI](https://circleci.com/gh/Web-Dev-Speedrunners/flex-or-fail.svg?style=svg)](https://app.circleci.com/pipelines/github/Web-Dev-Speedrunners/flex-or-fail)

## Overview

Live API: https://7vr20ojjo0.execute-api.us-east-1.amazonaws.com/prod

## Requirements

- [NodeJS 12](https://github.com/nvm-sh/nvm)
- Yarn: `npm install -g yarn`
- Typescript: `yarn global add typescript`
- [AWS CLI 2](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
- [Configure AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)
- AWS CDK: `yarn global add aws-cdk`

## Get Started

### Installing Dependencies

1. Navigate to `cdk` folder
2. Run `yarn install`
3. Add the following environment variables to `.env` in `cdk` folder
   ```
    DB_HOST=<Database Host IP>
    DB_NAME=<Database Name>
    DB_USER=<Database Name>
    DB_PASSWORD=<Database Password>
   ```
   For internal developers, you can find these credentials in notion
4. Navigate to `api_root_lambda`
5. Run `yarn install`

### Local Development

Local development allows you to run the app using express on your local machine. This server will run on `localhost:3000`. This will allow you to quickly develop and test, however, you should deploy your solution to AWS and testing from there.

#### Steps

Working Directory: `api_root_lambda`

1. Add the following environment variables to `.env` in `cdk` folder
   ```
    DB_HOST=<Database Host IP>
    DB_NAME=<Database Name>
    DB_USER=<Database Name>
    DB_PASSWORD=<Database Password>
   ```
2. Run server: `yarn run server:local`

## Deployment

Deployment allows you to run your code in the actual development environment the actual app might run on.

### Requirements

- All dependencies installed
- AWS Credential are configured (`aws configure`)

### How to Deploy

1. Navigate to `cdk` directory
2. **First Deployment Only** Bootstrap your AWS Account: `cdk bootstrap`
3. Run `yarn run deploy`

## Scripts

### Syncing database

When you make a database model change, you will need to update the database with the new changes. It runs the sequelize.sync command

1. Navigate to `api_root_lambda` directory
2. Update `.env` file with all the database environment variables
3. Sync database: `yarn run db:sync`.
   You can also optionally pass in `-f` parameter to force sync. This is required for any breaking changes.
   Command: `yarn run db:sync -f`
