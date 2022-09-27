
import type { Product } from "@prisma/client";
import { prisma } from "~/db.server";

export type {Product}

export async function getProducts() {
    return prisma.product.findMany()
}