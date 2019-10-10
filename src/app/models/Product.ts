import {Score} from './Score';
export class Product{
    price:string;
    latestReviewDate:string;
    domain:string;
    imageUrl:string;
    name:string;
    title:string;
    category:string;
    product_id:string;
    createdAt:string;
    reviewCount:number;
    topScores:Score[];
}