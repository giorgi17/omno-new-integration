import fastify, { FastifyLoggerInstance } from 'fastify';

const server = fastify({
    logger: {
        prettyPrint: {
            colorize: true,
            translateTime: true,
            ignore: 'pid,hostname',
            crlf: true,
        },
        level: process.env.LOG_LEVEL,
    },
});

export const logger: FastifyLoggerInstance = server.log;

export default server;
