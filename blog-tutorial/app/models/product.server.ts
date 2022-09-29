
import { prisma } from "~/db.server";
import type { Product } from "@prisma/client";


export type { Product };

export async function getProducts() {
    return  prisma.product.findMany()
}
export async function getProduct(id: string) {
    return prisma.product.findUnique({where : {id}});
}
export async function deleteProduct(id: string) {
    return prisma.product.delete({where : {id}});
}

export async function addProduct (product: Pick<Product, "title"|"description">)  {
    await prisma.product.create({data:product})
}
export const editProduct = async (id: Product['id']) => {
    await prisma.product.update({
        where:{
            id:id
        },
        data:{
            id
        }
    })
}