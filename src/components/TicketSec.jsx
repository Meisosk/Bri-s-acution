import React, { useState } from "react";
import tickets from "../assets/tickets.png";
import Form from "./Form";

function TicketSec({ ticketNum }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex items-center flex-col ">
      <img src={tickets} alt="" className="w-[34.4%] h-auto" />
      <button
        onClick={openModal}
        className="mb-5 lg:px-4 lg:py-2 md:p-3 md:px-8 sm:p-2 sm:px-5 bg-green-500 text-white rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-blue active:bg-green-800 shadow-lg lg:text-3xl lg:w-3/5 "
      >
        Bid Now!
      </button>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <Form closeModal={closeModal} ticketNum={ticketNum} />

            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TicketSec;
