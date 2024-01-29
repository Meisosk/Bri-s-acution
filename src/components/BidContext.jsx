import React, { createContext, useContext, useState } from "react";

const BidContext = createContext();

export const BidProvider = ({ children }) => {
  const [highestBid, setHighestBid] = useState(0);

  const updateHighestBid = (newBid) => {
    setHighestBid(newBid);
  };

  return (
    <BidContext.Provider value={{ highestBid, updateHighestBid }}>
      {children}
    </BidContext.Provider>
  );
};

export const useBidContext = () => useContext(BidContext);
