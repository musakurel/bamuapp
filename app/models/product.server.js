import { prisma } from "~/db.server";

export async function getProducts() {
  return prisma.product.findMany();
}
export async function getProduct({id}) {
  return prisma.product.findUnique({ where: { id } });
}

export async function createProduct({name, imageSlug}) {
  return prisma.product.create({ data: {name, imageSlug} });
}

