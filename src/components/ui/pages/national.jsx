import React from "react";

const national = () => {
  // YouTube-specific news articles
  const youtubeNews = [
    {
      title: "",
      link: "",
      thumbnail:"", // Correct thumbnail link
    },
    {
      title:"",
      link: "",
      thumbnail: "", // Placeholder for second news
    },
  ];

  return (
    <div className=" text-white grid grid-cols-2 gap-2 p-[10px]">
      {youtubeNews.map((news, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-4 bg-gray-800 p-2 rounded-lg shadow-lg"
        >
          {/* YouTube Thumbnail */}
          <img
            src={news.thumbnail}
            alt={news.title}
            className="w-[150px] h-[100px] rounded-lg transition-transform transform hover:scale-105"
          />
          
          {/* News Title as Link */}
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-400 hover:underline"
          >
            {news.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default national;
