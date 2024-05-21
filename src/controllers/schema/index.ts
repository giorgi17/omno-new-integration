import { FastifyReply, FastifyRequest } from 'fastify';

export const getSchema = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    reply.status(200).send({
        message: 'PSP schema has been retrieved.',
        data: [
            {
                name: 'clientId',
                type: 'string',
            },
            {
                name: 'clientSecret',
                type: 'string',
            },
        ],
    });
};
