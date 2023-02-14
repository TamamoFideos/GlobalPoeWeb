import Client from './client.model';
export default interface Order{
    id : number,
    client : Client,
    date : Date;
    address : Date;
    total : Date;
    card : Date;
}