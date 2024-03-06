import { app } from "./app";

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
