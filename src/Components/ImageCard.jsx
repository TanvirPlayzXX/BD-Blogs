import React from 'react';

const ImageCard = ({ bannerImage, category, title, authorName, authorImage, date }) => {
  return (
    <div className="box-border p-4 border-4 border-[#E8E8EA] dark:border-[#242535] rounded-2xl shadow-xl dark:shadow-none shadow-[#7a7a7a]">
    <div className="  bg-white rounded-2xl overflow-hidden dark:bg-[#181A2A]">
      {/* Banner Image */}
      <img 
        className="w-full rounded-2xl h-64 rounded-t-lg object-cover"
        src={bannerImage}
        alt="Banner" 
      />

      {/* Card Content */}
      <div className="p-4">
        {/* Category */}
        <div className="text-xs font-WorkSans text-white bg-indigo-600 py-1 p-2  rounded-md inline-block  dark:text-indigo-400 mb-2">
          {category}
        </div>

        {/* Title */}
        <h2 className="text-2xl leading-8  my-3 font-WorkSans font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h2>

        {/* Author Section */}
        <div className="flex items-center">
          {/* Author Image */}
          <img
            className="w-10 h-10 rounded-full"
            src={authorImage}
            alt={authorName}
          />
          <div className="ml-3 flex flex-row justify-around">
            {/* Author Name */}
            <p className="text-lg font-bold text-[#97989F] ">{authorName}</p>
            {/* Date */}
            <p className="text-lg ml-2 text-[#97989F] font-semibold">{date}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

{/* <ImageCard
        bannerImage="https://via.placeholder.com/400x200" // Replace with actual banner image URL
        category="Technology"
        title="Exploring the Future of AI: Innovations and Risks Ahead"
        authorName="Jane Doe"
        authorImage="https://randomuser.me/api/portraits/women/68.jpg" // Replace with actual author image URL
        date="September 19, 2024"
      /> */}

export default ImageCard;
