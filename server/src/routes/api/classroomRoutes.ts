import { Router } from "express";

import {
   getAllClassroomsController,
   getClassroomController,
   createClassroomController,
   updateClassroomController,
   deleteClassroomController,
} from "../../controllers/classroomControllers";

export const classroomRouter = Router();

classroomRouter.get("/", getAllClassroomsController);
classroomRouter.get("/:id", getClassroomController);
classroomRouter.post("/", createClassroomController);
classroomRouter.put("/:id", updateClassroomController);
classroomRouter.delete("/:id", deleteClassroomController);
