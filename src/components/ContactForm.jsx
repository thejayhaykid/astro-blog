import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const messageStyle = {
  resize: "none",
  padding: "0.5rem",
  borderRadius: "5px",
  width: "97%",
};

const messageStyleMobile = {
  ...messageStyle,
  width: "95%",
};

const buttonStyle = {
  maxWidth: "100px",
  padding: "0.5rem",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  alignSelf: "flex-end",
  cursor: "pointer",
  hover: {
    backgroundColor: "#0069d9",
  },
  active: {
    backgroundColor: "#0069d9",
  },
};

const buttonStyleMobile = {
  ...buttonStyle,
  maxWidth: "100%",
  width: "100%",
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);

  useEffect(() => {
    setDisableBtn(!(name && email && subject && message) || submitting);
  }, [submitting, name, email, subject, message]);

  const submitForm = (e) => {
    setSubmitting(true);
    e.preventDefault();
    toast.promise(
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, subject, message }),
      }),
      {
        pending: "Sending...",
        success: "Message sent!",
        error: "Error sending message",
      }
    );

    setSubmitting(false);
  };

  return (
    <div className="flex flex-col w-[90vw] justify-center align-middle content-center lg:max-w-xl self-center grow-2">
      <h1 className="pb-1 text-3xl">Contact me</h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="flex flex-col lg:max-w-700 gap-4 rounded-5 justify-center align-middle max-w-full"
      >
        <input type="hidden" name="contact" value="contact" />
        <div className="flex md:flex-row md:gap-1 justify-between w-full flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-1 rounded-5 rounded border border-gray-400 sm:w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-1 rounded-5 rounded border border-gray-400"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="p-1 rounded border border-gray-400 sm:w-full"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-1 rounded border border-gray-400"
        />
        <button
          className="p-1 rounded cursor-pointer bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white md:max-w-25 disabled:bg-blue-400 disabled:cursor-not-allowed"
          disabled={disableBtn}
          onClick={(e) => submitForm(e)}
        >
          Send
        </button>
      </form>
      <ToastContainer position="bottom-right" pauseOnHover closeOnClick />
    </div>
  );
};

export default ContactForm;
