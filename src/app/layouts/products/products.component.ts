import { Component } from '@angular/core';
import Product from '../../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  public products : Product[]
  public categories = [
    'Procesadores',
    'Discos Duros',
    'Memorias RAM',
    'Fuentes de Poder',
    'Tarjetas Graficas',
    'Perifericos'
  ]

  ngOnInit(): void {
    
  }
}
