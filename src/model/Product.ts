import { Station } from "./Station";

export interface Product {
    name: string;
    price_buy: null;
    price_sell: number;
    price_8kl: number;
    station: Station;
}
