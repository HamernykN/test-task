"use client";

import Image from "next/image";

import itemsData from "./data/items.json";
import { useState } from "react";
import Link from "next/link";

const ITEMS_PER_PAGE = 4;

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(itemsData.length / ITEMS_PER_PAGE);

  const getPaginatedItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return itemsData.slice(startIndex, endIndex);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto py-6 px-5 md:px-0">
      <h1 className="text-3xl font-bold mb-4">List of Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {getPaginatedItems().map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={500}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <Link
                href={item.url}
                className="text-xl font-semibold text-gray-800"
              >
                {item.name}
              </Link>

              <p className="text-sm text-gray-600">{item.species}</p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Status:</strong> {item.status}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Gender:</strong> {item.gender}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center space-x-2 mt-10">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
        >
          Previous
        </button>

        <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
