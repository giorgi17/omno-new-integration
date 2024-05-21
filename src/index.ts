import app from '@app';
import dotenv from 'dotenv';
import server from '@config/server';

dotenv.config();

(BigInt.prototype as any).toJSON = function () {
    return this.toString();
};

const start = async () => {
    try {
        await server.register(app);
        await server.ready();

        await server.listen(
            process.env.PORT ? Number(process.env.PORT) : 4000,
            '0.0.0.0',
            () => {
                console.log(server.printRoutes());
            }
        );

        if (process.env.NODE_ENV === 'production') {
            for (const signal of ['SIGINT', 'SIGTERM']) {
                process.on(signal, () =>
                    server.close().then(async err => {
                        console.log(`close application on ${signal}`);
                        process.exit(err ? 1 : 0);
                    })
                );
            }
        }
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
