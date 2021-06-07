import { PriceSearch } from "./price-search";

export class ItemDetalleSearch {

    id: string;
    title: string;
    price: PriceSearch;
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
    categories: string[];

    constructor( id: string, title: string, price: PriceSearch, picture: string, condition: string,
                 free_shipping: boolean, sold_quantity: number, description: string, categories: string[]){

                    this.id = id;
                    this.title = title;
                    this.price = price;
                    this.picture = picture;
                    this.condition = condition;
                    this.free_shipping = free_shipping;
                    this.sold_quantity = sold_quantity;
                    this.description = description;    
                    this.categories = categories;

                }

}
