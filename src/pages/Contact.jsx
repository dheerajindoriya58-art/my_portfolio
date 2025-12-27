import React from 'react'

export default function Contact() {
  return (
    <div className="w-full px-4">

      <h1 className="text-2xl sm:text-3xl md:text-[40px] text-center text-[#5e28ff] font-bold mt-10 sm:mt-14 md:mt-[60px]">
        Contact Us
      </h1>

      <div className="w-full sm:w-[360px] md:w-[420px] mx-auto p-5 bg-[#5117ff] text-white rounded mt-8 sm:mt-10">
        <h1 className="text-center mb-4 text-xl sm:text-2xl font-bold">
          Login Form
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter name"
            className="w-full p-2 text-white bg-transparent border-2 border-white rounded outline-none"
          />

          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-2 text-white bg-transparent border-2 border-white rounded outline-none"
          />

          <textarea
            placeholder="message..."
            className="w-full resize-none p-2 rounded text-black"
            rows="4"
          />

          <button className="w-full bg-white text-[#1f104c] rounded-full py-2 text-base font-semibold">
            Submit
          </button>
        </form>
      </div>

    </div>
  )
}
