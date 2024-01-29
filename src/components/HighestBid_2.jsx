import React from "react";
import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";
import { useBid2Context } from "./Bid2Context";
import "../gold.css";

function HighestBid2() {
  const [fetchError, setFetchError] = useState(null);
  const [bid, setBid] = useState(0);
  const { highestBid } = useBid2Context();

  useEffect(() => {
    const fetchBid = async () => {
      const { data, error } = await supabase
        .from("Bids2")
        .select()
        .order("bid", { ascending: false })
        .limit(1);

      if (error) {
        setFetchError("Could not fetch bid");
        console.log(error);
      }

      if (data && data.length > 0) {
        setBid(data[0].bid);
        setFetchError(null);
      }
    };

    fetchBid();
  }, []);

  useEffect(() => {
    if (highestBid > bid) {
      setBid(highestBid);
    }
  }, [highestBid]);

  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      {bid && (
        <p className="gold font-bold text-4xl md:text-6xl lg:text-9xl">
          ${bid}
        </p>
      )}
    </div>
  );
}

export default HighestBid2;
