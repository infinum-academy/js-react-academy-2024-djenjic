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
    averageRating?: number;
    imageUrl?: string;
    reviews?: IReview[];
    id?:String;
}
  