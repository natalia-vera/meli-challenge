import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

//componente donde se maneja la lógica de la búsqueda
export class SearchComponent implements OnInit {

  inputSearch = new FormControl('');

  //inyecto el servicio router para redireccionar al componente de resultados
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['/items'], { queryParams: { search: this.inputSearch.value } });
  }

}
