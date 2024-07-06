'use client';

import TestimonialImg01 from '~/public/images/testimonial-01.jpg';
import TestimonialImg02 from '~/public/images/testimonial-02.jpg';
import TestimonialImg03 from '~/public/images/testimonial-03.jpg';
import TestimonialImg04 from '~/public/images/testimonial-04.jpg';
import TestimonialImg05 from '~/public/images/testimonial-05.jpg';
import TestimonialImg06 from '~/public/images/testimonial-06.jpg';
import TestimonialImg07 from '~/public/images/testimonial-07.jpg';
import TestimonialImg08 from '~/public/images/testimonial-08.jpg';
import TestimonialImg09 from '~/public/images/testimonial-09.jpg';
import TestimonialImg10 from '~/public/images/testimonial-10.jpg';
import TestimonialImg11 from '~/public/images/testimonial-11.jpg';
import TestimonialImg12 from '~/public/images/testimonial-12.jpg';
import TestimonialImg13 from '~/public/images/testimonial-13.jpg';
import TestimonialImg14 from '~/public/images/testimonial-14.jpg';
import TestimonialImg15 from '~/public/images/testimonial-15.jpg';
import TestimonialImg16 from '~/public/images/testimonial-16.jpg';
import TestimonialImg17 from '~/public/images/testimonial-17.jpg';
import TestimonialImg18 from '~/public/images/testimonial-18.jpg';
import TestimonialImg19 from '~/public/images/testimonial-19.jpg';
import TestimonialImg20 from '~/public/images/testimonial-20.jpg';
import TestimonialImg21 from '~/public/images/testimonial-21.jpg';
import TestimonialImg22 from '~/public/images/testimonial-22.jpg';
import TestimonialVideoThumb01 from '~/public/images/video-testimonial-01.jpg';
import TestimonialVideoThumb02 from '~/public/images/video-testimonial-02.jpg';

import Testimonial from '#/ui/testimonial';
import useMasonry from '#/utils/useMasonry';

export default function WallOfLove() {
  const masonryContainer = useMasonry();

  const testimonials = [
    {
      img: TestimonialImg01,
      name: 'Peter Lowe',
      username: '@peterlowex',
      date: 'May 19, 2027',
      content:
        "Simple has revolutionized the way I manage my work. Its intuitive interface and seamless functionality make staying organized effortless. I can't imagine my life without it.",
      channel: 'Twitter',
    },
    {
      img: TestimonialImg02,
      name: 'Rodri Alba',
      username: '@rodri_spn',
      date: 'May 19, 2027',
      content:
        'As a busy professional, Simple has been a lifesaver. It streamlines my workflow, allowing me to focus on what truly matters. Plus, its minimalist design is a breath of fresh air in a cluttered digital world.',
      channel: 'Twitter',
    },
    {
      img: TestimonialImg03,
      name: 'Michele Lex',
      date: 'May 19, 2027',
      content:
        'I run a nonprofit organization, and we needed a website to share our mission and connect with donors. This tool allowed us to create a visually appealing site that effectively communicates our message.',
      rating: 5,
      channel: 'Google',
    },
    {
      img: TestimonialImg04,
      name: 'Michael Ross',
      username: '@michjack',
      date: 'Apr 12, 2027',
      content:
        "I've struggled to find a website builder that suits my needs until I found Simple. Its clean design and user-friendly features make staying organized a breeze. I highly recommend it.",
      channel: 'Twitter',
    },
    {
      img: TestimonialImg05,
      name: 'Mike Bryan',
      username: '@mike0point7',
      date: 'Mar 10, 2027',
      content: "Simple's mind-blowing AI Site Builder: Crash Course 🚀",
      videoThumb: TestimonialVideoThumb01,
      videoUrl: '#0',
      channel: 'YouTube',
    },
    {
      img: TestimonialImg06,
      name: 'Sarah Rodriguez',
      username: '@sararodriguez',
      date: 'Feb 27, 2027',
      content:
        'I was blown away by how easy it was to create my website using this tool! Within a few hours, I had a professional-looking site up and running, and my client could not believe.',
      channel: 'Twitter',
    },
    {
      img: TestimonialImg07,
      name: 'Duncan Mitch',
      username: '@lovingme_',
      date: 'Feb 08, 2027',
      content:
        "Simple has simplified my life in more ways than one. From managing my clients to keeping track of deadlines, it's become my go-to tool for staying on top of everything. I couldn't imagine managing without it!",
      channel: 'Twitter',
    },
    {
      img: TestimonialImg08,
      name: 'Kavisha Mills',
      date: 'Jan 25, 2027',
      content:
        "I'm a freelancer, and having a professional website is crucial for attracting clients. This tool not only helped me create a beautiful portfolio but also boosted my visibility.",
      rating: 5,
      channel: 'Google',
    },
    {
      img: TestimonialImg09,
      name: 'Dante Luzzi',
      username: '@danteluzzi',
      date: 'Jan 12, 2027',
      content:
        "I've never been a fan of complicated website builders, which is why Simple is perfect for me. Its minimalist design and straightforward functionality make staying organized feel like second nature.",
      channel: 'Twitter',
    },
    {
      img: TestimonialImg12,
      name: 'Erica Rossi',
      username: '@ericaita_7',
      date: 'Dec 29, 2026',
      content:
        "I'm a freelancer, and having a professional website is crucial for attracting clients. This tool not only helped me create a beautiful portfolio but also boosted my visibility online. I couldn't be happier with the results!",
      channel: 'Twitter',
    },
    {
      img: TestimonialImg13,
      name: 'Emma Riekwel',
      username: '@jonnoriek',
      date: 'Dec 15, 2026',
      content:
        "SI'm a freelancer, and having a professional website is crucial for attracting clients. This tool not only helped me create a beautiful portfolio but also boosted my visibility online. I couldn't be happier with the results!",
      channel: 'Twitter',
    },
    {
      img: TestimonialImg11,
      name: 'Jeff Broderick',
      username: '@jeff_br',
      date: 'Dec 02, 2026',
      content:
        "I'm a designer, and I wanted a website that would showcase my work beautifully. This tool exceeded my expectations with its stunning gallery options and seamless integration with social media platforms. I've received so many compliments on my portfolio - thank you!",
      channel: 'Twitter',
    },
    {
      img: TestimonialImg15,
      name: 'Mariana Castilho',
      date: 'Jan 25, 2027',
      content:
        "I've never been one for coding, so finding a website builder that didn't require any technical skills was a dream come true. This tool exceeded my expectations, and I'm proud to show off my new site to friends.",
      rating: 5,
      channel: 'Google',
    },
    {
      img: TestimonialImg10,
      name: 'Keith Kennedy',
      username: '@jeff_br',
      date: 'Dec 02, 2026',
      content:
        "Simple has simplified my life in more ways than one. From managing my clients to keeping track of deadlines, it's become my go-to tool for staying on top of everything. I couldn't imagine managing without it!",
      channel: 'Twitter',
    },
    {
      img: TestimonialImg14,
      name: 'Kate Stevanovic',
      username: '@hey_im_kate',
      date: 'Mar 10, 2027',
      content: "Simple's mind-blowing AI Site Builder: Crash Course 🚀",
      videoThumb: TestimonialVideoThumb02,
      videoUrl: '#0',
      channel: 'YouTube',
    },
    {
      img: TestimonialImg16,
      name: 'Rodri Alba',
      username: '@rodri_spn',
      date: 'Dec 02, 2026',
      content:
        "As a founder, having a visually appealing and user-friendly website is essential. This tool not only helped me achieve that but also improved my site's performance and SEO.",
      channel: 'Twitter',
    },
    {
      img: TestimonialImg17,
      name: 'Miguel Liverani',
      date: 'Jan 25, 2027',
      content:
        "I'm not tech-savvy at all, but this tool made me feel like a pro web designer! The step-by-step guides and tutorials were incredibly helpful, and I never felt overwhelmed. I've already recommended it to all my friends who are looking to build their own websites.",
      rating: 5,
      channel: 'Google',
    },
    {
      img: TestimonialImg18,
      name: 'Helena Gynn',
      username: '@helena_88',
      date: 'Apr 12, 2027',
      content:
        "I'm a designer, and I wanted a website that would showcase my work beautifully. This tool exceeded my expectations with its stunning gallery options and seamless integration with social media platforms. I 've received so many compliments on my portfolio - thank you!",
      channel: 'Twitter',
    },
    {
      img: TestimonialImg19,
      name: 'James Kenny',
      username: '@jameskenny',
      date: 'Feb 27, 2027',
      content:
        "After struggling with other website builders, I stumbled upon this gem, and I'm thrilled I did! The templates are modern, the customization options are endless, and the support team is incredibly helpful.",
      channel: 'Twitter',
    },
    {
      img: TestimonialImg21,
      name: 'Sarah Ferguson',
      username: '@sarah_rose',
      date: 'Feb 08, 2027',
      content:
        "I needed a website for my personal brand, and this tool helped me bring my vision to life. The customization options allowed me to create a site that perfectly reflects my style and personality. I've received so many compliments on the design - thank you!",
      channel: 'Twitter',
    },
    {
      img: TestimonialImg22,
      name: 'Christopher Rossi',
      username: '@yo_chris',
      date: 'Feb 08, 2027',
      content:
        "I recently switched from another website builder to this one, and I couldn't be happier with my decision. The migration process was seamless, and the transition was practically effortless. Plus, the new features and updates have made a world of difference!",
      channel: 'Twitter',
    },
    {
      img: TestimonialImg20,
      name: 'Kimberly Rutz',
      username: '@imkimberly',
      date: 'Feb 02, 2027',
      content:
        "I've been searching for a website builder that offers both functionality and affordability, and I finally found it with this tool. Can't recommend it enough!",
      channel: 'Twitter',
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Testimonials grid */}
          <div
            ref={masonryContainer}
            className="grid items-start gap-4 sm:grid-cols-3 md:gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial
                  testimonial={testimonial}
                  className="w-full rotate-0 md:group-odd:-rotate-1 md:group-even:rotate-1"
                >
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
