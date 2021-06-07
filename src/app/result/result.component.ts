import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiSearchService } from '../api-search.service';
import { RespuestaSearch } from '../model/respuesta-search';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

//componente donde se maneja el listado resultante de la búsqueda
export class ResultComponent implements OnInit {

  seEjecutoSearch: boolean = false;
  loading: boolean = false;
  respuesta: RespuestaSearch;

  //inyecto el servicio router para obtener el parametro de búsqueda
  constructor(private route: ActivatedRoute, private api: ApiSearchService) {
    this.respuesta = new RespuestaSearch('', [], []);
  }

  ngOnInit(): void {
    // Subscripción a queryParams: cuando cambian los parámetros ejecuta la búsqueda
    this.route.queryParams.subscribe(params => {
      this.seEjecutoSearch = false;
      this.loading = true;
      this.api.getSearch(params.search).subscribe((res: RespuestaSearch) => {
        // Almaceno el resultado de la búsqueda en el campo respuesta
        this.respuesta = res;
        this.seEjecutoSearch = true;
        this.loading = false;
      }, (error) => this.loading = false);
    });
  }

}
