// src/typings/show.ts
export interface IReview {
    text: string;
    rating: number;
}
  
export interface IShow {
    title: string;
    description: string;
    averageRating?: number;
    imageUrl?: string;
    reviews?: IReview[];
}
  