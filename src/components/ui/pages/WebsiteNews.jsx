import React from "react"; 
import dollarCoin from "../../../../public/assets/dollar-coin.png";

const WebsiteNews = () => {
  // Website-specific news articles
  const websiteNews = [
    {
      title: "Law enforcers stop protesters from breaking thru Bangabhaban barricade",
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
    <div className="grid  grid-cols-2 gap-3">
      {websiteNews.map((news, index) => (
        <div key={index} className="flex flex-col items-center  space-y-3 bg-gray-800 p-1  mt-10 rounded-lg">
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 text-center hover:underline"
          >
            {news.title}
          </a>
          <div className="flex item-center ">
          <span> + 10 </span>
          <img src={dollarCoin} className="w-[25px] h-[25px]"></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebsiteNews;
