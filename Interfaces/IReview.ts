export interface IReviewUpload {
  text: string;
  rating: number;
}

export interface IReviewDTO {
  id:string;
  pfpUrl:string;
  username: string;
  text: string;
  rating: number;
  createdAt: string;
  item:string;
}
