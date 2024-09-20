import React from 'react';

const Casd = ({ category, title, authorName, authorImage, date }) => {
  return (
    <div className=" max-w-xl p-8 bg-white rounded-xl shadow-xl dark:shadow-none shadow-[#7a7a7a] dark:bg-gray-800">
      {/* Category */}
      <div className="text-xs font-WorkSans  bg-indigo-600 py-1 p-2 rounded-md inline-block text-white class:text-black   mb-2">
        {category}
      </div>

      {/* Title */}
      <h2 className="text-4xl font-WorkSans font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>

      {/* Author Section */}
      <div className="flex items-center">
        {/* Author Image */}
        <img
          className="w-16 h-16 rounded-full"
          src={authorImage}
          alt={authorName}
        />
          <div className="ml-3 flex flex-row justify-around">
            {/* Author Name */}
            <p className="text-xl font-medium text-gray-700 dark:text-gray-300">{authorName}</p>
            {/* Date */}
            <p className="text-xl ml-2 text-gray-500 dark:text-gray-400">{date}</p>
          </div>
      </div>
    </div>
  );
};

{/* <Casd
        category="Technology"
        title="Exploring the Future of AI: Innovations and Risks Ahead"
        authorName="Jane Doe"
        authorImage="https://randomuser.me/api/portraits/women/68.jpg" // Example image link
        date="September 19, 2024"
      /> */}

export default Casd;
