import { ItemDetalleSearch } from "./item-detalle-search";

export class RespuestaDetalleSearch {

    author: any;
    item: ItemDetalleSearch;

    constructor(author: any, item: ItemDetalleSearch){
                 this.author = author;
                 this.item = item;
               }

}
