import { PriceSearch } from "./price-search";

//clase del modelo para referenciar a un item de respuesta
export class ItemSearch {

    id: string;
    title: string;
    price: PriceSearch;
    picture: string;
    condition: string;
    free_shipping: string;
    address: string;

    constructor(id: string, title: string, price: PriceSearch,
        picture: string, condition: string, free_shipping: string, address: string) {

        this.id = id;
        this.title = title;
        this.price = price;
        this.picture = picture;
        this.condition = condition;
        this.free_shipping = free_shipping;
        this.address = address;
    }
   
}
