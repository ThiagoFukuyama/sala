import { Request, Response, NextFunction } from "express";

import {
   getAllClassrooms,
   getClassroom,
   createClassroom,
   updateClassroom,
   deleteClassroom,
} from "../services/classroomServices";

import { Prisma } from "@prisma/client";

export const getAllClassroomsController = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      const allClassrooms = await getAllClassrooms();
      res.status(200).json({ data: { classrooms: allClassrooms } });
   } catch (error) {
      next(error);
   }
};

export const getClassroomController = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   const { id } = req.params;

   try {
      const classroom = await getClassroom(Number(id));

      if (!classroom) {
         res.status(404);
         throw new Error("Sala não encontrada");
      }

      res.status(200).json({ data: { classroom } });
   } catch (error) {
      next(error);
   }
};

export const createClassroomController = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   const { name, capacity, building } = req.body;

   try {
      const newClassroom = await createClassroom(
         name,
         Number(capacity),
         Number(building)
      );

      res.status(201).json({ data: { classroom: newClassroom } });
   } catch (error) {
      next(error);
   }
};

export const updateClassroomController = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   const { id } = req.params;
   const { name, capacity, building } = req.body;

   try {
      const classroomToUpdate = await getClassroom(Number(id));

      if (!classroomToUpdate) {
         res.status(404);
         throw new Error("Sala não encontrada");
      }

      const updatedData: Partial<Prisma.ClassroomUpdateInput> = {
         name: name || classroomToUpdate.name,
         capacity: capacity || classroomToUpdate.capacity,
         building: building || classroomToUpdate.building,
         slug: "teste",
      };

      const updatedClassroom = await updateClassroom(Number(id), updatedData);
      res.status(200).json({ data: { classroom: updatedClassroom } });
   } catch (error) {
      next(error);
   }
};

export const deleteClassroomController = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   const { id } = req.params;

   try {
      const classroomToDelete = await getClassroom(Number(id));

      if (!classroomToDelete) {
         res.status(404);
         throw new Error("Sala não encontrada");
      }

      const deletedClassroom = await deleteClassroom(Number(id));
      res.status(200).json({ data: { classroom: deletedClassroom } });
   } catch (error) {
      next(error);
   }
};
