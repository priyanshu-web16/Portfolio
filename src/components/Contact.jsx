import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ef7fqpb",
        "template_2vjrr68",
        form.current,
        "xVYgWyrzFzMf1VoS6"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        () => {
          alert("Failed to send message");
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p className="text-gray-400">
              Feel free to reach out for collaborations or just a friendly hello 👋
            </p>

            <div className="space-y-4">
              <p><span className="font-semibold">Email:</span> kumarpriyanshu1947@gmail.com</p>
              <p><span className="font-semibold">Phone:</span> +91 9625862116</p>
              <p><span className="font-semibold">Location:</span> India</p>
            </div>

            {/* Message*/}
            <div className="text-gray-400">
              <p>I’m always excited to collaborate on meaningful projects and bring ideas to life through clean, responsive, and engaging web experiences. Whether you have a project in mind, need a frontend developer, or just want to say hello — feel free to reach out. Let’s build something amazing together.</p>
            </div>
          </div>

          <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-[#1c2b3a] p-6 rounded-xl space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className="w-full p-3 rounded bg-[#2b3c4d]"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="w-full p-3 rounded bg-[#2b3c4d]"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="w-full p-3 rounded bg-[#2b3c4d]"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded"
          >
            Send Message
          </button>
        </form>

        </div>
      </div>
    </section>
  ); 
}