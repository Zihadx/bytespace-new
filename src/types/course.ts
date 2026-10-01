export interface Category {
  id: string;
  name: string;
}

export interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  ratingCount: number;
  level: string;
  lessons: number;
  duration: string;
  comments: number;
  totalStudents: number;
  studentAvatars: string[];
  additionalStudents: string;
  price: number;
  priceType: string;
  image: string;
}