export interface Event {
    title:string,
    description:string,
    location:string,
    imageURL:string,
    date: string; // ISO 8601 string with offset (e.g., "2024-05-20T14:30:00+03:00")
    minimum_age:number,
    admission_fee:number
}