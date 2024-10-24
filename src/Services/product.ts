import { Product } from "@/types/Products";
import { Products } from '@/Products.ts/Produtos' 
import { resolve } from "path";
import { rejects } from "assert";
import { Produtos } from "@/components/produtos/tab";

export const getAllProducts = async (): Promise<Product[]> => {

    return new Promise ((resolve, reject)=> {
        return setTimeout(()=> {
            resolve(Products)
        }, 2000)
    })

}