import Category from './category.model';

export default interface Product{
    name : string,
    price : number,
    description : string,
    id : number,
    category : Category,
    image : string,
}