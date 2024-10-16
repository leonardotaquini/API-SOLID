import { AppRouter } from "./appRouter";
import { Server } from "./server";

(
    async () => {
        const server = new Server({
            port: 3000,
            routes: AppRouter.routes
        });


        server.start();

    }
)()