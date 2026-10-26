import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from 'aws-cdk-lib/pipelines';

import { AppStage } from './pipeline-stage';

export class PipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'BhargavDay5Pipeline',

      synth: new ShellStep('Synth', {
        input: CodePipelineSource.connection(
          'bhargavvvk/aws-cdk-pipeline',
          'main',
          {
            connectionArn:
              'arn:aws:codeconnections:us-east-1:590852515231:connection/5cc60f13-2c88-466d-b654-ad83884f299d',
            triggerOnPush: true,
          }
        ),

        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth',
        ],
      }),
    });

    pipeline.addStage(
      new AppStage(this, 'Dev', {
        env: {
          account: this.account,
          region: this.region,
        },
      })
    );
  }
}