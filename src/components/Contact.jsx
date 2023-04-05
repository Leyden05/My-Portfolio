import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full m-auto md:pl-20 p-4 py-16 bg-white">
      <h1 data-aos="fade-up" className="py-8 text-6xl font-bold text-center text-blue">Contact</h1>
      <form
        action="https://getform.io/f/3b082445-1208-42ca-b3e3-e20de1677796"
        method="POST"
        encType="multipart/form-data"
      >
        <div data-aos="fade-up" className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col 2">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col 2">
            <label className="uppercase text-sm py-2">Phone</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div data-aos="fade-up" className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="name"
          />
        </div>
        <div data-aos="fade-up" className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          />
        </div>
        <div data-aos="fade-up" className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300"
            rows="10"
            name="message"
          ></textarea>
        </div>
        <button className="bg-blue text-white mt-4 w-full p-4 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
