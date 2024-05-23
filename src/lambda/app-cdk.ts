import { App } from 'aws-cdk-lib';
import { MyAppStack } from './cdk-stack';

const app = new App();
new MyAppStack(app, 'MyAppStack');
app.synth();
