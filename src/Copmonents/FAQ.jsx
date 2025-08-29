import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "Do I need an appointment to see a doctor?",
    answer:
      "While walk-ins are accepted, appointments are recommended for faster service.",
  },
  {
    question: "Does CityCare accept insurance?",
    answer: "Yes, we accept most major insurance providers.",
  },
  {
    question: "Are emergency services available 24/7?",
    answer: "Absolutely. Our emergency department operates 24/7.",
  },
  {
    question: "How can I get my medical records?",
    answer:
      "You can request them through our patient portal or at the front desk.",
  },
  {
    question: "Do you provide pediatric care?",
    answer:
      "Yes, our pediatric specialists provide complete care for infants, children, and adolescents.",
  },
  {
    question: "Is there an in-house pharmacy?",
    answer: "Yes, we have a 24/7 in-house pharmacy for your convenience.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 px-4 bg-gray-50 text-center">
      <span className="mb-2 block text-2xl font-semibold text-blue-600">
        FAQ
      </span>
      <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-[40px]/[48px]">
        Any Questions? Look Here
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-lg shadow cursor-pointer transition transform hover:scale-[1.02] hover:shadow-lg"
            onClick={() => toggleFAQ(i)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaQuestionCircle className="text-blue-600 w-5 h-5" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
              </div>

              {openIndex === i ? (
                <FaChevronUp className="text-blue-600" />
              ) : (
                <FaChevronDown className="text-blue-600" />
              )}
            </div>

            {openIndex === i && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
