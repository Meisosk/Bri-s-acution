import React, { createContext, useContext, useState } from "react";

const Bid2Context = createContext();

export const Bid2Provider = ({ children }) => {
  const [highestBid, setHighestBid] = useState(0);

  const updateHighestBid = (newBid) => {
    setHighestBid(newBid);
  };

  return (
    <Bid2Context.Provider value={{ highestBid, updateHighestBid }}>
      {children}
    </Bid2Context.Provider>
  );
};

export const useBid2Context = () => useContext(Bid2Context);
