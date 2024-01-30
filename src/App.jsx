import React from "react";
import TicketSec from "./components/TicketSec";
import Hero from "./components/Hero";
import HighestBid from "./components/HighestBid";
import HighestBid_2 from "./components/HighestBid_2";
import { BidProvider } from "./components/BidContext";
import { Bid2Provider } from "./components/Bid2Context";

function App() {
  return (
    <BidProvider>
      <Bid2Provider>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow bg-blue-400">
            <Hero></Hero>
            <div className="flex justify-center">
              <div className="flex flex-col md:justify-around md:flex-row items-center h-auto w-full">
                <div className="flex md:flex-col items-start md:max-w-[50vw] sm:px-20 md:px-0">
                  <div className="flex flex-col md:flex-row items-center">
                    <TicketSec ticketNum={1} />
                    <div className="flex flex-col justify-center max-w-[50%]">
                      <p className="font-bold text-[2vw]">
                        Current Highest Bid:{" "}
                      </p>
                      <div className="flex justify-center rounded-md md:p-5 md:px-16 mb-5 bg-gradient-to-br from-[#00C8FF] to-[#74FAC8] via-light-blue-300 shadow-lg sm:p-2">
                        <HighestBid_2 />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center">
                    <TicketSec />
                    <div className="flex flex-col justify-center max-w-[50%]">
                      <p className="font-bold text-[2vw]">
                        Current Highest Bid:{" "}
                      </p>
                      <div className="flex justify-center rounded-md md:p-5 md:px-16 mb-5 bg-gradient-to-br from-[#00C8FF] to-[#74FAC8] via-light-blue-300 shadow-lg sm:p-2">
                        <HighestBid />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-4/5 md:w-2/5 flex p-10 items-center">
                  <p className="lg:text-2xl font-bold text-gray-800 md:text-lg text-center md:text-left">
                    All money will be donated to Israel. The auction will be
                    open until February 29th 2024. The highest bidders will be
                    contacted by Brianna. In case of an issue with the highest
                    bidders, the next highest bidders will be contacted. A total
                    of four tickets in two sets of pairs are being auctioned
                    off.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
            <p>
              Contact Brianna Loshin at{" "}
              <a href="tel:2406786034" className="underline">
                240-678-6034
              </a>{" "}
              with questions
            </p>
          </footer>
        </div>
      </Bid2Provider>
    </BidProvider>
  );
}

export default App;
