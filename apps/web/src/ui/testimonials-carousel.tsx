import TestimonialImg01 from '~/public/images/testimonial-01.jpg';
import TestimonialImg02 from '~/public/images/testimonial-02.jpg';
import TestimonialImg03 from '~/public/images/testimonial-03.jpg';
import TestimonialImg04 from '~/public/images/testimonial-04.jpg';

import Testimonial from '#/ui/testimonial';

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      img: TestimonialImg01,
      name: 'Peter Lowe',
      username: '@peterlowex',
      date: 'May 19, 2027',
      content:
        "As a founder, having a visually appealing and user-friendly website is essential. This tool not only helped me achieve that but also improved my site's performance and SEO.",
      channel: 'Twitter',
    },
    {
      img: TestimonialImg02,
      name: 'Rodri Alba',
      username: '@rodri_spn',
      date: 'Apr 12, 2027',
      content:
        "Simple has revolutionized the way I manage my work. Its intuitive interface and seamless functionality make staying organized effortless. I can't imagine my life without it.",
      channel: 'Twitter',
    },
    {
      img: TestimonialImg03,
      name: 'Michele Lex',
      username: '@MikyBrown',
      date: 'Mar 04, 2027',
      content:
        "I've tried several website builders before, but none were as user-friendly and versatile as this one. From design to functionality, it exceeded my expectations!",
      channel: 'Twitter',
    },
    {
      img: TestimonialImg04,
      name: 'Michael Ross',
      username: '@michjack',
      date: 'Jan 15, 2027',
      content:
        "Simple lives up to its name in every way. It's incredibly easy to use yet powerful enough to handle all my tasks effortlessly. It's become an essential part of my daily routine.",
      channel: 'Twitter',
    },
  ];

  return (
    <section className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-gradient-to-b before:from-gray-100">
      <div className="pt-12 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Top startups love Simple
            </h2>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[94rem] justify-center">
          <div
            className="absolute bottom-20 -z-10 -translate-x-36"
            aria-hidden="true"
          >
            <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px]" />
          </div>
          <div className="absolute -bottom-10 -z-10" aria-hidden="true">
            <div className="h-80 w-80 rounded-full bg-blue-500 opacity-40 blur-[160px]" />
          </div>
          <div className="absolute bottom-0 -z-10" aria-hidden="true">
            <div className="h-56 w-56 rounded-full border-[20px] border-white blur-[20px]" />
          </div>
          {/* Row */}
          <div className="group inline-flex w-full flex-nowrap py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] md:py-20">
            <div className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3">
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div
              className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3"
              aria-hidden="true"
            >
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
