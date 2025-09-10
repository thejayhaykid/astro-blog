import { Disclosure, Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Can you help my small business?",
    answer:
      "Yes! I work with small businesses to create custom software solutions that fit your needs.",
  },
  {
    question: "What is your experience?",
    answer:
      "I have over 10 years of software engineering experience across many industries and company sizes.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I’m proficient in a broad range of tools and languages — I pick the best fit for your project.",
  },
  {
    question: "How do you charge?",
    answer:
      "Rates depend on project scope and complexity. I provide detailed estimates after requirements gathering.",
  },
];

export default function Example() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-gray-50/20">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-foreground">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-50/20">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-foreground">
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
                            <p className="text-base leading-7 text-secondary-foreground">
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
