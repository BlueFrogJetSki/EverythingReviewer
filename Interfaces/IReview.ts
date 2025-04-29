export interface IReviewUpload {
  text: string;
  rating: number;
}

export interface IReviewDTO {
  pfpUrl:string
  username: string;
  text: string;
  rating: number;
  createdAt: string;
}
