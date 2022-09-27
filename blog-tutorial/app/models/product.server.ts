
import type { Product } from "@prisma/client";
import { prisma } from "~/db.server";

export type {Product}

export async function getProducts() {
    return prisma.product.findMany()
}
export async function getProduct(id: string) {
    return prisma.product.findUnique({where : {id}});
}

export const addProduct = async (
    title: string,
    description: string,
) => {
    await prisma.product.create(title,description)
}