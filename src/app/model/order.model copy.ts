import Client from './client.model';
export default interface Order{
    id : number,
    client : Client,
    date : Date;
}