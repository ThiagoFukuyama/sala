import { Prisma } from "@prisma/client";

import { db } from "../config/db";

export const getAllClassrooms = async () => {
   return await db.classroom.findMany();
};

export const getClassroom = async (id: number) => {
   return await db.classroom.findUnique({
      where: {
         id,
      },
   });
};

export const createClassroom = async (
   name: string,
   capacity: number,
   building: number
) => {
   return await db.classroom.create({
      data: {
         name,
         capacity,
         building,
         slug: "test" + crypto.randomUUID(),
      },
   });
};

export const updateClassroom = async (
   id: number,
   { name, capacity, building }: Partial<Prisma.ClassroomUpdateInput>
) => {
   return await db.classroom.update({
      data: {
         name,
         capacity,
         building,
         slug: "test" + crypto.randomUUID(),
      },
      where: {
         id,
      },
   });
};

export const deleteClassroom = async (id: number) => {
   return await db.classroom.delete({
      where: {
         id,
      },
   });
};
