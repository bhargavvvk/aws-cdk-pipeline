import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { S3Stack } from './s3-stack';

// A Stage groups one or more application stacks that are deployed together.
// The pipeline deploys one Stage at a time (e.g. dev → prod).
export class AppStage extends cdk.Stage {
  constructor(scope: Construct, id: string, props?: cdk.StageProps) {
    super(scope, id, props);

    new S3Stack(this, 'S3Stack', {
      description: 'Day5 PoC — S3 bucket deployed via CDK Pipelines',
    });
  }
}
