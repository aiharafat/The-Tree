import { Link } from "react-router-dom";

const BottomNavigation = () => {
return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl h-16">
<div className="text-center text-white font-bold w-1/5">
<Link to="/Home" className="bg-[#272a2f] rounded-lg px-4 py-2 w-full text-center" >
          Home
          </Link>
    
</div>
<div className="text-center text-white font-bold w-1/5">
<Link to="/Family" className="bg-[#272a2f] rounded-lg px-4 py-2 w-full text-center" >
          Family
          </Link>

</div>
<div className="text-center text-white font-bold w-1/5">
<Link to="/News" className="bg-[#272a2f] rounded-lg px-4 py-2 w-full text-center" >
          News
          </Link>
</div>
<div className="text-center text-white font-bold w-1/4">
<Link to="/Election" className="bg-[#272a2f] rounded-lg px-4 py-2 w-full text-center" >
          Election
          </Link>
</div>
<div className="text-center text-white font-bold w-1/4">
<p className="mt-0">Airdrop</p>
</div>
</div>

);

};
 
export default BottomNavigation;