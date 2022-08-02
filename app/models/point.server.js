import { prisma } from "~/db.server";

export async function getPoints() {
  return prisma.point.findMany();
}
export async function createPoint(point) {
  return prisma.point.create({ data: point });
}

export async function getPoint({ id }) {
  return prisma.point.findUnique({ where: { id } });
}

export async function updatePoint(point) {
  return prisma.point.update({ where: { id:point.id }, data: point });
}
export async function deletePoint(id){
  return prisma.point.delete({where:{id}})
}

