import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemSearch } from 'src/app/model/item-search';
import { PriceSearch } from 'src/app/model/price-search';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

//Componente que maneja la lógica del item
export class ItemListComponent implements OnInit {

  //Parámetro de entrada
  @Input()
  item: ItemSearch;

  constructor(private router: Router) {
    this.item = new ItemSearch('', '', new PriceSearch('', 0, 0), '', '', '', '');
  }

  ngOnInit(): void {
  }

  verDetalle(): void {
    this.router.navigate(['/items/' + this.item.id]);
  }

}
