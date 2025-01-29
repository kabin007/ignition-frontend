import React from "react";
import { ChevronRight, Calendar } from "lucide-react";

const BlogSection = () => {
  // Blog Data
  const blogs = [
    {
      title: "How to Ace Your IELTS Exam",
      category: "Test Prep",
      author: "Jane Doe",
      date: "2025-01-01",
      description: "Learn effective tips and strategies to improve your IELTS scores.",
      image: "https://via.placeholder.com/800x400?text=IELTS+Prep",
      url: "/blog/ace-ielts"
    },
    {
      title: "Top 10 Countries for Affordable Education",
      category: "Study Abroad",
      author: "John Smith",
      date: "2024-12-28",
      description: "Explore the most budget-friendly countries for higher education.",
      image: "https://via.placeholder.com/800x400?text=Study+Abroad",
      url: "/blog/affordable-education"
    },
    {
      title: "Step-by-Step Visa Application Guide",
      category: "Immigration",
      author: "Alice Johnson",
      date: "2024-12-20",
      description: "A comprehensive guide to help you apply for a student visa.",
      image: "https://via.placeholder.com/800x400?text=Visa+Guide",
      url: "/blog/visa-guide"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Latest Blogs</h2>
          <button className="text-sm text-blue-500 hover:text-blue-600 flex items-center gap-1">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="p-4 border-2 border-gray-200 rounded-lg bg-white flex flex-col justify-between hover:shadow-lg hover:scale-105 hover:rotate-1 transition-transform duration-300 ease-out"
            >
              <div>
                {/* Blog Image */}
                <div className="mb-3 h-40 bg-gray-200 rounded-lg overflow-hidden">
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                      No Image Available
                    </div>
                  )}
                </div>

                {/* Blog Title */}
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {blog.title}
                </h3>

                {/* Blog Category and Author */}
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-bold text-blue-600">{blog.category}</span>{" "}
                  | By {blog.author}
                </p>

                {/* Blog Date */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  Published: {new Date(blog.date).toLocaleDateString()}
                </div>

                {/* Blog Description */}
                <p className="text-sm text-gray-600 mb-3">{blog.description}</p>
              </div>

              {/* Read More Button */}
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-3 py-2 text-sm bg-gray-50 text-gray-700 border rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group hover:border-blue-200"
              >
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for hover animation */}
      <style jsx>{`
        .hover:shadow-lg {
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default BlogSection;
