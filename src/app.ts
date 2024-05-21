import {
    FastifyInstance,
    FastifyPluginCallback,
    FastifyPluginOptions,
} from 'fastify';
import AutoLoad from '@fastify/autoload';
import fp from 'fastify-plugin';
import path from 'path';

const app: FastifyPluginCallback = (
    fastify: FastifyInstance,
    opts: FastifyPluginOptions,
    done
) => {
    // Place here your custom code!

    // Do not touch the following lines

    // This loads all plugins defined in plugins
    // those should be support plugins that are reused
    // through your application
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'plugins'),
        options: Object.assign({}, opts),
    });

    // This loads all plugins defined in services
    // define your routes in one of these
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'routes'),
        dirNameRoutePrefix: function rewrite(_, folder) {
            return folder;
        },
        options: Object.assign({}, opts),
    });

    done();
};

export default fp(app);
