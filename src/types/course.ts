export interface Category {
  id: string;
  name: string;
}

export interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  level: string;
  lessons: number;
  duration: string;
  comments: number;
  price: number;
  priceType: string;
  image: string;
  additionalInstructors: string;
}