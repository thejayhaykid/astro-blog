import { Disclosure, Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Can you help my small business?",
    answer:
      "Absolutely! Any questions you have that are software related, I can get answers for. Just ask!",
  },
  {
    question: "What is your hourly rate?",
    answer:
      "I typically work on a project or task basis. I care more about the value I can provide than the time it takes me to do so. If you need a quote, let me know and we can work something out. But I'd love to work within your budget.",
  },
  {
    question: "What is your experience?",
    answer:
      "I am a senior level software engineer with nearly 10 years of experience. I am still new to the business side of freelancing, but I am confident in my ability to deliver quality work. Whatever you need, I can make work.",
  },
  {
    question: "What is your availability?",
    answer:
      "I am available to work on your project full-time. I am flexible with my schedule and can work around your needs. I am here to make your life easier.",
  },
  {
    question: "What is your preferred tech stack?",
    answer:
      "I am a Subject Matter Expert in React, TypeScript, and overall front-end development. I am comfortable with any tech stack, but mostly I am focused on making sure the final product is exactly what you need. I am here to make your life easier.",
  },
];

export default function Example() {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-gray-50/20">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-primary">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-50/20">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-primary">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <Transition show>
                        <Transition.Child
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Transition.Child
                            enter="ease-in duration-200"
                            enterFrom="-y-2"
                            enterTo="0"
                            leave="ease-in duration-200"
                            leaveFrom="0"
                            leaveTo="-y-2"
                          >
                            <p className="text-base leading-7 text-secondary">
                              {faq.answer}
                            </p>
                          </Transition.Child>
                        </Transition.Child>
                      </Transition>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
