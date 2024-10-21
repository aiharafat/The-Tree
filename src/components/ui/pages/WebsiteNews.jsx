import React from "react";

const WebsiteNews = () => {
  // Website-specific news articles
  const websiteNews = [
    {
      title: "Website Blog 1",
      link: "https://website-link1.com",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      title: "Website Blog 2",
      link: "https://website-link2.com",
      thumbnail: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {websiteNews.map((news, index) => (
        <div key={index} className="flex flex-col items-center space-y-4 bg-gray-800 p-4 rounded-lg">
          <img src={news.thumbnail} alt={news.title} className="w-24 h-24 rounded-md" />
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

export default WebsiteNews;
