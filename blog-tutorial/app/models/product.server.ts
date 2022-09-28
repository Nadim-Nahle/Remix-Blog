
import { prisma } from "~/db.server";
import type { Product } from "@prisma/client";


export type { Product };

export async function getProducts() {
    return  prisma.product.findMany()
}
export async function getProduct(id: string) {
    return prisma.product.findUnique({where : {id}});
}

export const addProduct = async (product: Pick<Product, "title"|"description">) => {
    await prisma.product.create({data:product})
}