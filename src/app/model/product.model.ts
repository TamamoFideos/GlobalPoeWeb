import Category from './category.model';

export default interface Product{
    name : string,
    price : number,
    stock : number,
    description : string,
    id : number,
    category : Category
}