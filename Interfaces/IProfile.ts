import type { IReviewDTO } from "./IReview";

export interface IProfile {
    "pfpUrl":string|null,
    "username":string,
    "reviews":IReviewDTO[]
}