import React from "react";

function RatingCard() {
  function ConvertToStars(Rating=4.5){
    const fullstar = Math.floor(Rating);
    const halfstar = Rating % 1 !== 0
    return{fullstar,halfstar}
  }
  const { fullstar, halfstar } = ConvertToStars(4.5);
  return (
    <div className="rounded-[20px] shadow-custom p-[15px] mt-3">
      <div className="flex items-center">
        <div className="w-[30px] h-[30px] rounded-[100%] flex items-center justify-center bg-slate-700 text-white mr-1">
          M
        </div>
       <p>Name</p>
      </div>
      <p className="line-clamp-2 overflow-hidden text-ellipsis text-[13px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
       </p>{" "}
       {[...Array(fullstar)].map((_, i) => (
          <span key={i} className="text-yellow-500">★</span> // Full star
        ))}
        {halfstar && <span className="text-yellow-500">☆</span>} {/* Half star */}
    </div>
  );
}

export default RatingCard;
