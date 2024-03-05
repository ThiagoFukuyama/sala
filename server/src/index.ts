import { app } from "./app";

const server = app;

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
