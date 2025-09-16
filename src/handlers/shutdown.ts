import { Server } from "http";

export default function gracefulShutdown(server: Server, signal: string) {
    console.log(`Received ${signal}. Shutting down mailing service gracefully...`);

    server.close((err) => {
        if (err) {
            console.error('Error during shutdown:', err);
            process.exit(1);
        }

        console.log('Mailing service stopped successfully');
        process.exit(0);
    });

    setTimeout(() => {
        console.error('Force shutdown after timeout');
        process.exit(1);
    }, 15000);
}