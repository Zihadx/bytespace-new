import { courseCategories, courses } from "../data/courses";
import { Category, Course } from "../types/course";

export const getCategories = (): Category[] => {
  return courseCategories;
};

export const getFeaturedCourses = (): Course[] => {
  return courses.slice(0, 6);
};

export const getAllCourses = (): Course[] => {
  return courses;
};

export const getCourseById = (
  id: number
): Course | undefined => {
  return courses.find((course) => course.id === id);
};