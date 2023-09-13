import { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const submitForm = (e) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, subject, message }),
    })
      .then(() => alert("Thank you!"))
      .catch((error) => alert(error));
  };

  return (
    <>
      <div className="relative isolate bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800 lg:w-1/2"></div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                Get in touch
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
                I'm thrilled to receive your message! Whether you have a
                question, suggestion, or just want to say hello, I'm here to
                help. Please take a moment to fill out the form below, and I'll
                personally get back to you as soon as possible. Your feedback
                means the world to me, as it allows me to enhance my services
                and tailor them to your specific needs. Don't hesitate to reach
                out—I'm ready to listen and provide the support you deserve.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600 dark:text-gray-200">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400 dark:text-gray-200"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900 dark:hover:text-gray-50"
                      href="mailto:jake@jakehayes.net"
                    >
                      jake@jakehayes.net
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            onSubmit={submitForm}
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    for="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50"
                  >
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autocomplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="email"
                    className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autocomplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    for="subject"
                    className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50"
                  >
                    Subject
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      autocomplete="none"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    for="message"
                    className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
