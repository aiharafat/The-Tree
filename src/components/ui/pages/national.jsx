import React from "react";
import dollarCoin from "../../../../public/assets/dollar-coin.png";
const National = () => {
  // News articles
  const national = [
    {
      title: "sdvcvwvwc",
      link: "https://website-link1.com",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      title: "Website Blog 2",
      link: "https://website-link2.com",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      title: "Website Blog 2",
      link: "https://website-link2.com",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      title: "Website Blog 3",
      link: "https://website-link2.com",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      title: "",
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
    <div className="text-white grid grid-cols-2 gap-4 p-[10px]">
      {national.map((news, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-4 bg-gray-800 p-4  rounded-lg shadow-lg"
        >
          {/* Thumbnail */}
          <img
            src={news.thumbnail}
            alt={news.title || "News Thumbnail"}
            className="w-[150px] h-[100px] rounded-lg transition-transform transform hover:scale-105"
          />

          {/* Title as Link */}
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-400 hover:underline text-center"
          >
            {news.title.trim() ? news.title : "Read more about this news"}
          </a>
          <div className="flex items-center">
              <span> + 10 </span>
              <img src={dollarCoin} className="w-[25px] h-[25px]" alt="Coin Icon" />
            </div>
        </div>
      ))}
    </div>
  );
};

export default National;
