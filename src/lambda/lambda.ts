import awsLambdaFastify from '@fastify/aws-lambda';
import server from '@config/server';
import TransactionRoute from '@routes/transaction';
import SchemaRoute from '@routes/schema';

server.register(SchemaRoute);
server.register(TransactionRoute);

export const handler = awsLambdaFastify(server);
