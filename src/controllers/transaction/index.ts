import {
    processTransactionRequestBodyType,
    transactionResponseHookRequestBodyType,
} from '@routes/transaction/types';
import { FastifyReply, FastifyRequest } from 'fastify';

export const processTransaction = async (
    request: FastifyRequest<{
        Body: processTransactionRequestBodyType;
    }>,
    reply: FastifyReply
) => {
    // Receiving all data from core needed for transaction processing
    const PspSchemaData = request.body.schemaParams;

    // Do transaction processing and send pending status if there is no error
    // .....

    reply.status(200).send({
        message: PspSchemaData
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
