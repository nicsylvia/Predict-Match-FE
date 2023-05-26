import React from "react";

const MatchPredictTable = () => {
  return (
    <div className="bg-orange-500">
      <h2 className="text-black text-[23px] font-[500]">Match Fixture</h2>
      <div className="flex w-[160px] mb-[10px] justify-center items-center">
        <div className="w-[50%] h-1 rou bg-[#fbc02d]"></div>
        <div className="w-[50%] h-1 bg-[gray]"></div>
      </div>

      <div className="w-[600px] h-[400px] bg-green-500">
        <div>
          <h2>NETTROCK FC VS BAMMA FC</h2>
          <h2>June 16, 17:00</h2>
          <h2>NETRO STADIUM</h2>
          <h2>Predict Matches</h2>
        </div>
      </div>
    </div>
  );
};

export default MatchPredictTable;