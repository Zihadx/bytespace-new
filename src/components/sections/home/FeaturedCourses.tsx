"use client";

import {
  getCategories,
  getFeaturedCourses,
} from "@/src/services/courses";

import { Category, Course } from "@/src/types/course";
import { useState } from "react";
import CourseCard from "@/src/components/cards/CourseCard";

const INITIAL_CATEGORIES = 18;

const FeaturedCourses = () => {
  const [activeCategory, setActiveCategory] = useState("featured");
  const [showAllCategories, setShowAllCategories] = useState(false);

  const categories: Category[] = getCategories();
  const courses: Course[] = getFeaturedCourses();

  const visibleCategories = showAllCategories
    ? categories
    : categories.slice(0, INITIAL_CATEGORIES);

  return (
    <section className="w-full bg-white px-5 py-16 md:px-10 lg:px-16">
      <div className="mx-auto custom-container">
        {/* =======Section Header======== */}
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#0B0D21] md:text-4xl lg:text-[40px]">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h1>

          <p className="mt-4 text-sm leading-6 text-gray-500 md:text-base md:leading-7">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different
            fields, from technology to the arts, and make a difference
            in your career and life.
          </p>
        </div>

        {/* ======Category Filters ==========*/}
        <div className="mx-auto mb-16 flex max-w-5xl flex-wrap items-center justify-center gap-3">
          {visibleCategories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-[#B7F500] text-[#171717]"
                    : "bg-[#F4F4F5] text-[#45454F] hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            );
          })}

          {!showAllCategories &&
            categories.length > INITIAL_CATEGORIES && (
              <button
                type="button"
                onClick={() => setShowAllCategories(true)}
                className="px-2 py-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
              >
                + More
              </button>
            )}

          {showAllCategories && (
            <button
              type="button"
              onClick={() => setShowAllCategories(false)}
              className="px-2 py-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
            >
              Show Less
            </button>
          )}
        </div>

        {/* =======Course Grid========= */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;