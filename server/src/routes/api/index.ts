import { Router } from "express";

import { classroomRouter } from "./classroomRoutes";

export const apiRouter = Router();

apiRouter.use("/classrooms", classroomRouter);
