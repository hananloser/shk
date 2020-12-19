import { Station } from "./Station";

export interface Product {
    id : string,
    name: string;
    price_buy: null;
    price_sell: number;
    price_8kl: number;
    station: Station;
}
