import React, { useState } from "react";
import supabase from "../config/supabaseClient";
import { useBidContext } from "./BidContext";
import { useBid2Context } from "./Bid2Context";

function Form({ closeModal, ticketNum }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bid, setBid] = useState("");
  const [organization, setOrganization] = useState("");
  const [comments, setComments] = useState("");
  const [formError, setFormError] = useState("");

  const bidContext = ticketNum === 1 ? "Bids2" : "Bids";

  const updateHighestBid =
    bidContext === "Bids"
      ? useBidContext().updateHighestBid
      : useBid2Context().updateHighestBid;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !bid || !organization) {
      setFormError("Please fill out all required fields");
      return;
    }

    try {
      console.log(bidContext);
      const { error } = await supabase
        .from(bidContext)
        .insert([{ name, email, phone, bid, comments, organization }]);

      if (error) {
        console.error("Supabase error:", error);
        setFormError("Error submitting the form");
      } else {
        setFormError(null);
        updateHighestBid(bid);
        closeModal();
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setFormError("Unexpected error occurred");
    }
  };

  return (
    <div className="p-12">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-md font-medium text-gray-700"
          >
            Name<span className="text-red-500">*</span>:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-md font-medium text-gray-700"
          >
            Email<span className="text-red-500">*</span>:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-md font-medium text-gray-700"
          >
            Phone Number<span className="text-red-500">*</span>:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="bid"
            className="block text-md font-medium text-gray-700"
          >
            Bid<span className="text-red-500">*</span>:
          </label>
          <input
            type="text"
            id="bid"
            value={bid}
            onChange={(e) => setBid(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="organization"
            className="block text-md font-medium text-gray-700"
          >
            Select an Organization<span className="text-red-500">*</span>:
          </label>
          <select
            id="organization"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled>
              Organization to donate to:
            </option>
            <option value="MDA">MDA</option>
            <option value="FIDF">FIDF</option>
            <option value="Other">Other (Specify in comments)</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="comments"
            className="block text-md font-medium text-gray-700"
          >
            Comments:
          </label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500 esize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 px-5 rounded-md hover:bg-blue-600 shadow-lg"
        >
          Submit
        </button>

        {formError && <p className="text-red-500">{formError}</p>}
      </form>
    </div>
  );
}

export default Form;
