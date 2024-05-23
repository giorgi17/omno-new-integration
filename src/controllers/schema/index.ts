import { stripeSchema } from '@utils/schemas';
import { FastifyReply, FastifyRequest } from 'fastify';

export const getSchema = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    reply.status(200).send({
        message: 'PSP schema has been retrieved.',
        data: stripeSchema,
    });
};
