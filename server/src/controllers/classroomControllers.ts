import { Request, Response } from "express";

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
   res: Response
) => {
   const allClassrooms = await getAllClassrooms();

   res.status(200).json({ data: { classrooms: allClassrooms } });
};

export const getClassroomController = async (req: Request, res: Response) => {
   const { id } = req.params;
   const classroom = await getClassroom(Number(id));

   if (!classroom) {
      return res.status(404).json({ message: "Sala não encontrada" });
   }

   res.status(200).json({ data: { classroom } });
};

export const createClassroomController = async (
   req: Request,
   res: Response
) => {
   const { name, capacity, building } = req.body;
   const newClassroom = await createClassroom(
      name,
      Number(capacity),
      Number(building)
   );

   res.status(201).json({ data: { newClassroom } });
};

export const updateClassroomController = async (
   req: Request,
   res: Response
) => {
   const { id } = req.params;
   const { name, capacity, building } = req.body;

   const classroomToUpdate = await getClassroom(Number(id));

   if (!classroomToUpdate) {
      return res.status(404).json({ message: "Sala não encontrada" });
   }

   const updatedData: Partial<Prisma.ClassroomUpdateInput> = {
      name: name || classroomToUpdate.name,
      capacity: capacity || classroomToUpdate.capacity,
      building: building || classroomToUpdate.building,
      slug: "teste",
   };

   const updatedClassroom = await updateClassroom(Number(id), updatedData);

   res.status(200).json({ data: { updatedClassroom } });
};

export const deleteClassroomController = async (
   req: Request,
   res: Response
) => {
   const { id } = req.params;
   const classroomToDelete = await getClassroom(Number(id));

   if (!classroomToDelete) {
      return res.status(404).json({ message: "Sala não encontrada" });
   }

   const deletedClassroom = await deleteClassroom(Number(id));

   res.status(200).json({ data: { deletedClassroom } });
};
