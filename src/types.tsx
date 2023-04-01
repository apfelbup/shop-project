export interface IProducts {
    title:string,
    price:number,
    avatar:string,
    id:number,
    quantity?:number,
    description?:string
}

export interface ICartProducts {
    title:string,
    price:number,
    avatar:string,
    id:number,
    quantity:number,
    description:string
    size:string
}
