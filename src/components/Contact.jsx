import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zreuj2m",       // Your Service ID
        "template_wc6yy0a",      // Your Template ID
        form.current,
        "44RgvmPMpTC1YtXmg"      // Your Public Key
      )
      .then(
        () => {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
            form.current.reset();
          }, 3000);
        },
        (error) => {
          alert("❌ Failed to send. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <div
      name="contact"
      className="contact w-full min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-200 dark:from-black dark:via-gray-900 dark:to-gray-800 p-4 text-gray-900 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full"
      >
        <div className="pb-8 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Contact
          </p>
          <p className="py-6 text-gray-600 dark:text-gray-300">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full md:w-1/2 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="7"
              required
              className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 my-4 mx-auto rounded-md hover:scale-110 transition-transform duration-300 shadow-md"
            >
              Send Message
            </button>

            {success && (
              <p className="text-green-500 text-center mt-2">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
