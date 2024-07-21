// src/typings/show.ts
export interface IReview {
    text: string;
    rating: number;
    email?: string;
    avatar?: string;
}
  
export interface IShow {
    title: string;
    description: string;
    average_rating: number;
    image_url?: string;
    reviews?: IReview[];
    id?:String;
}
  