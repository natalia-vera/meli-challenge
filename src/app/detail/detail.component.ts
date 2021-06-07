import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiSearchService } from '../api-search.service';
import { RespuestaDetalleSearch } from '../model/respuesta-detalle-search';
import { ItemDetalleSearch } from '../model/item-detalle-search';
import { PriceSearch } from '../model/price-search';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

//componente donde se maneja la lógica del detalle del producto seleccionado
export class DetailComponent implements OnInit {

  id: string | null = null;
  respuestaDetalle: RespuestaDetalleSearch;
  loading: boolean = false;
  errorEnCarga: boolean = false;
  noEncontrado: boolean = false;

  constructor(private route: ActivatedRoute, private api: ApiSearchService) {
    this.respuestaDetalle = new RespuestaDetalleSearch('', new ItemDetalleSearch('', '', new PriceSearch('', 0, 0), '', '', false, 0, '', []));
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loading = false;
    this.noEncontrado = false;
    if (this.id) {
      this.loading = true;
      this.api.getDetail(this.id).subscribe((res: RespuestaDetalleSearch) => {
        // Almaceno el resultado de la búsqueda en el campo respuestaDetail
        this.respuestaDetalle = res;
        this.loading = false;
      }, error => {
        console.log(error);
        this.loading = false;
        this.errorEnCarga = true;
        if (error.status === 404) {
          this.noEncontrado = true;
        }
      });
    }
  }

}
