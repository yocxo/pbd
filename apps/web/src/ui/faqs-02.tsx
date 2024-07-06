import Accordion from '#/ui/accordion';

export default function Faqs() {
  const faqs01 = [
    {
      question: 'Getting started with Simple',
      answer:
        'Simple is designed to be user-friendly and intuitive, while Complex is more robust and feature-rich. Both tools are great for creating websites, but Simple is ideal for beginners and small businesses, while Complex is better suited for larger organizations and developers.',
    },
    {
      question: 'Promotional and free plan trials',
      answer:
        "Yes, but you'll still pay the remainder of the term for the plan you signed up for.",
    },
    {
      question: "I'm unable to verify my account",
      answer:
        "Yes, but you'll still pay the remainder of the term for the plan you signed up for.",
    },
    {
      question: 'Copyright (DMCA) Takedown Notice',
      answer:
        "Support is available 24/7 via email, chat, and phone. We're here to help you with any questions or concerns you may have.",
    },
    {
      question: 'How to report an unrecognized charge',
      answer:
        'Yes! You can invite clients or coworkers to collaborate on your projects, and they can upload their own content.',
    },
  ];

  const faqs02 = [
    {
      question: 'Change with my paid plan',
      answer:
        'Simple is designed to be user-friendly and intuitive, while Complex is more robust and feature-rich. Both tools are great for creating websites, but Simple is ideal for beginners and small businesses, while Complex is better suited for larger organizations and developers.',
    },
    {
      question: 'Cancel my subscription',
      answer:
        "Yes, but you'll still pay the remainder of the term for the plan you signed up for.",
    },
    {
      question: 'I am unable to edit my profile',
      answer:
        "Yes, but you'll still pay the remainder of the term for the plan you signed up for.",
    },
    {
      question: 'How to delete my account',
      answer:
        "Support is available 24/7 via email, chat, and phone. We're here to help you with any questions or concerns you may have.",
    },
    {
      question: 'How to reach customer support',
      answer:
        'Yes! You can invite clients or coworkers to collaborate on your projects, and they can upload their own content.',
    },
  ];

  const faqs03 = [
    {
      question: 'How to change my password',
      answer:
        'Simple is designed to be user-friendly and intuitive, while Complex is more robust and feature-rich. Both tools are great for creating websites, but Simple is ideal for beginners and small businesses, while Complex is better suited for larger organizations and developers.',
    },
    {
      question: 'How to change my email address',
      answer:
        "Yes, but you'll still pay the remainder of the term for the plan you signed up for.",
    },
    {
      question: 'How to change my username',
      answer:
        "Yes, but you'll still pay the remainder of the term for the plan you signed up for.",
    },
    {
      question: 'How to change my billing information',
      answer:
        "Support is available 24/7 via email, chat, and phone. We're here to help you with any questions or concerns you may have.",
    },
    {
      question: 'How to change my notification settings',
      answer:
        'Yes! You can invite clients or coworkers to collaborate on your projects, and they can upload their own content.',
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* Getting started */}
            <div>
              <h2 className="mb-5 text-xl font-bold">Getting Started</h2>
              <div className="space-y-2">
                {faqs01.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.question}
                    id={`faqs-${index}`}
                  >
                    {faq.answer}
                  </Accordion>
                ))}
              </div>
            </div>
            {/* Profile & plans */}
            <div>
              <h2 className="mb-5 text-xl font-bold">Profile & plans</h2>
              <div className="space-y-2">
                {faqs02.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.question}
                    id={`faqs-${index}`}
                  >
                    {faq.answer}
                  </Accordion>
                ))}
              </div>
            </div>
            {/* Accounts */}
            <div>
              <h2 className="mb-5 text-xl font-bold">Accounts</h2>
              <div className="space-y-2">
                {faqs03.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.question}
                    id={`faqs-${index}`}
                  >
                    {faq.answer}
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
