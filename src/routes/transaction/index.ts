import {
    processTransaction,
    transactionResponseHook,
} from '@controllers/transaction';
import { FastifyInstance, FastifyPluginCallback } from 'fastify';
import {
    processTransactionRequestBody,
    processTransactionRequestBodyType,
    transactionResponseHookRequestBody,
    transactionResponseHookRequestBodyType,
} from './types';

const TransactionRoute: FastifyPluginCallback = async (
    server: FastifyInstance,
    _,
    done
) => {
    server.route<{
        Body: processTransactionRequestBodyType;
    }>({
        method: 'POST',
        url: '/process',
        schema: {
            body: processTransactionRequestBody,
        },
        handler: processTransaction,
    });

    server.route<{
        Body: transactionResponseHookRequestBodyType;
    }>({
        method: 'POST',
        url: '/transactionResponseHook',
        schema: {
            body: transactionResponseHookRequestBody,
        },
        handler: transactionResponseHook,
    });

    done();
};

export default TransactionRoute;
