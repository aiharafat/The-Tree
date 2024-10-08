const BottomNavigation = () => {
return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl h-16">
<div className="text-center text-white font-bold w-1/5">
    <p className="mt-0">Home</p>
</div>
<div className="text-center text-white font-bold w-1/5">
<p className="mt-0">Family</p>
</div>
<div className="text-center text-white font-bold w-1/5">
    <p className="mt-0">News</p>
</div>
<div className="text-center text-white font-bold w-1/4">
<p className="mt-0">Election</p>
</div>
<div className="text-center text-white font-bold w-1/4">
<p className="mt-0">Airdrop</p>
</div>
</div>

);

};
 
export default BottomNavigation;