import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import {
    NodejsFunction,
    NodejsFunctionProps,
} from 'aws-cdk-lib/aws-lambda-nodejs';
import path from 'path';

export class MyAppStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const nodeJsFunctionProps: NodejsFunctionProps = {
            bundling: {
                externalModules: [
                    'aws-sdk', // Use the 'aws-sdk' available in the Lambda runtime
                ],
            },
            runtime: lambda.Runtime.NODEJS_20_X,
            timeout: cdk.Duration.seconds(30), // Api Gateway timeout
        };

        // Schema fetch
        const rootFunction = new NodejsFunction(this, 'rootFunction', {
            entry: path.join(__dirname, 'lambda.ts'),
            ...nodeJsFunctionProps,
            functionName: 'rootFunction',
        });

        const api = new apigateway.RestApi(this, 'fastifyApi', {
            restApiName: 'fastify-api',
        });

        const lambdaIntegration = new apigateway.LambdaIntegration(
            rootFunction
        );

        api.root.addMethod('GET', lambdaIntegration);
        // Add other paths
        const processResource = api.root.addResource('process'); // Adds the /process path
        processResource.addMethod('POST', lambdaIntegration); // Adds a POST method to the /process path

        const transactionResponseHookResource = api.root.addResource(
            'transactionResponseHook'
        ); // Adds the /transactionResponseHook path
        transactionResponseHookResource.addMethod('POST', lambdaIntegration); // Adds a POST method to the /transactionResponseHook path
    }
}

export default MyAppStack;
