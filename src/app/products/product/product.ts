import { Brand } from "./../../brands/brand/brand";

export interface Product {

    id: number;
    descricao: string;
    valor: number;
    marca: Brand;
}