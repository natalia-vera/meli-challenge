import { ItemSearch } from "./item-search";

export class RespuestaSearch {

    author: any;
    categories: string [] = [];
    items: ItemSearch [] = [];

    
    constructor(author: any, categories: string [], items: ItemSearch []){
                this.author     = author;
                this.categories = categories;
                this.items      = items;
    }
   
}
