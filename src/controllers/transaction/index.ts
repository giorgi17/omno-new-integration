import {
    processTransactionRequestBodyType,
    transactionResponseHookRequestBodyType,
} from '@routes/transaction/types';
import { matchSchemas } from '@utils/helpers';
import { FastifyReply, FastifyRequest } from 'fastify';

export const processTransaction = async (
    request: FastifyRequest<{
        Body: processTransactionRequestBodyType;
    }>,
    reply: FastifyReply
) => {
    const headers = request.headers;

    // Receiving and validating all data from core needed for transaction processing
    const schemaData = matchSchemas(headers);

    // Do transaction processing and send pending status if there is no error
    // .....

    reply.status(200).send({
        message: schemaData
            ? 'Transaction is pending'
            : 'schemaParams were not received!',
    });
};

export const transactionResponseHook = async (
    request: FastifyRequest<{
        Body: transactionResponseHookRequestBodyType;
    }>,
    reply: FastifyReply
) => {
    // Getting information from hook coming from PSP
    const isSuccessful = request.body.success;

    // Sending information about transaction to core hook
    // axios.post('https://core-url.com/transactionHook', {
    //     transactionInfo: isSuccessful,
    // });

    reply.status(200).send({
        message: 'Information about transaction has been sent to core hook.',
    });
};
