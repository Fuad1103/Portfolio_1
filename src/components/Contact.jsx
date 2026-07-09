import { useState } from "react";
import emailjs from "emailjs-com";
import Reveal from "./Reveal";

function Contact() {

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });


  const [status, setStatus] = useState("");


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "login@fuad",
        "template_x3ajq69",
        formData,
        "ZEfzVOT9RpcfcC6Hq"
      )

      .then(() => {
        setStatus("Message sent successfully! ✅");

        setFormData({
          from_name: "",
          from_email: "",
          message: "",
        });
      })

      .catch(() => {
        setStatus("Failed to send message ❌");
      });
  };


  return (
    <Reveal>

      <section
        id="contact"
        className="
          py-20
          px-4
          md:px-10
          bg-white
          dark:bg-gray-950
          transition-colors
          duration-500
        "
      >

        <div className="max-w-4xl mx-auto">


          {/* Heading */}
          <div className="text-center mb-12">

            <h2
              className="
                text-3xl
                md:text-4xl
                font-bold
                text-gray-800
                dark:text-white
              "
            >
              Contact Me
            </h2>


            <p
              className="
                mt-4
                text-gray-600
                dark:text-gray-300
              "
            >
              Have a project or want to work together? Send me a message.
            </p>

          </div>



          {/* Form */}
          <form
            onSubmit={sendEmail}
            className="
              bg-gray-100
              dark:bg-gray-900
              rounded-xl
              shadow-lg
              p-8
              space-y-6
            "
          >


            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              value={formData.from_name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  from_name: e.target.value,
                })
              }

              className="
                w-full
                px-4
                py-3
                rounded-lg
                bg-white
                dark:bg-gray-800
                text-gray-800
                dark:text-white
                outline-none
                border
                border-gray-300
                dark:border-gray-700
              "

              required
            />



            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              value={formData.from_email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  from_email: e.target.value,
                })
              }

              className="
                w-full
                px-4
                py-3
                rounded-lg
                bg-white
                dark:bg-gray-800
                text-gray-800
                dark:text-white
                outline-none
                border
                border-gray-300
                dark:border-gray-700
              "

              required
            />



            {/* Message */}
            <textarea
              rows="5"
              placeholder="Your Message"

              value={formData.message}

              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }

              className="
                w-full
                px-4
                py-3
                rounded-lg
                bg-white
                dark:bg-gray-800
                text-gray-800
                dark:text-white
                outline-none
                border
                border-gray-300
                dark:border-gray-700
              "

              required
            />



            {/* Button */}
            <button
              type="submit"

              className="
                w-full
                py-3
                bg-blue-600
                text-white
                rounded-lg
                hover:bg-blue-700
                hover:scale-105
                transition
                duration-300
              "
            >
              Send Message
            </button>


            {/* Status */}
            {status && (
              <p
                className="
                  text-center
                  text-gray-700
                  dark:text-gray-300
                "
              >
                {status}
              </p>
            )}


          </form>


        </div>

      </section>

    </Reveal>
  );
}

export default Contact;