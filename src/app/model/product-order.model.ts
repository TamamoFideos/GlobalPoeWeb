import Order from "./order.model copy";
import Product from 'src/app/model/product.model';

export default interface ProductOrder{
    id? : number,
    productName : string,
    amount : number,
    order? : Order,
    product : Product
}