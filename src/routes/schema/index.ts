import { getSchema } from '@controllers/schema';
import { FastifyInstance, FastifyPluginCallback } from 'fastify';

const SchemaRoute: FastifyPluginCallback = async (
    server: FastifyInstance,
    _,
    done
) => {
    server.route({
        method: 'GET',
        url: '/',
        handler: getSchema,
    });

    done();
};

export default SchemaRoute;
