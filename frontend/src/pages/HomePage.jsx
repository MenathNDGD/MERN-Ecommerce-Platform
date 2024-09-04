import React from "react";
import CategoryItem from "../components/CategoryItem";

const categories = [
  { href: "/Jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
  { href: "/T-Shirts", name: "T-Shirts", imageUrl: "/tshirts.jpg" },
  { href: "/Shirts", name: "Shirts", imageUrl: "/shirts.jpg" },
  { href: "/Shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
  { href: "/Glasses", name: "Glasses", imageUrl: "/glasses.png" },
  { href: "/Jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
  { href: "/Suits", name: "Suits", imageUrl: "/suits.jpg" },
  { href: "/Bags", name: "Bags", imageUrl: "/bags.jpg" },
  { href: "/Accessories", name: "Accessories", imageUrl: "/accessories.jpg" },
];

const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mb-4 text-5xl font-bold text-center sm:text-6xl text-emerald-400">
          Explore Our Categories
        </h1>
        <p className="mb-12 text-xl text-center text-gray-300">
          Discover the latest trends in eco-friendly fashion
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
