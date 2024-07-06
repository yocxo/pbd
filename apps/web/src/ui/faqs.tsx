import Accordion from '#/ui/accordion';

export default function Faqs() {
  const faqs = [
    {
      question: 'How is Simple different from Complex?',
      answer:
        'Simple is designed to be user-friendly and intuitive, while Complex is more robust and feature-rich. Both tools are great for creating websites, but Simple is ideal for beginners and small businesses, while Complex is better suited for larger organizations and developers.',
    },
    {
      question: 'Can I cancel my plan at any time?',
      answer:
        "Yes, but you'll still pay the remainder of the term for the plan you signed up for.",
      active: true,
    },
    {
      question: 'Can I cancel my workspace plan at any time?',
      answer:
        "Yes, but you'll still pay the remainder of the term for the plan you signed up for.",
    },
    {
      question: 'What kind of support does Simple provide?',
      answer:
        "Support is available 24/7 via email, chat, and phone. We're here to help you with any questions or concerns you may have.",
    },
    {
      question: 'Can my clients or coworkers upload their own content?',
      answer:
        'Yes! You can invite clients or coworkers to collaborate on your projects, and they can upload their own content.',
    },
    {
      question: 'How much traffic can Simple hosting handle?',
      answer:
        'Our hosting plans are designed to handle high traffic volumes, so you can rest assured that your site will perform well under pressure.',
    },
    {
      question: 'Are Simple websites SEO-friendly?',
      answer:
        'Yes! Simple websites are designed with SEO in mind, so you can easily optimize your site for search engines.',
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-3xl font-bold md:text-4xl">
              Questions we often get
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  title={faq.question}
                  id={`faqs-${index}`}
                  active={faq.active}
                >
                  {faq.answer}
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
