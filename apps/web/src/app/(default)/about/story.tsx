import Image from 'next/image';
import AboutImage from '~/public/images/about-02.jpg';
import AboutLogo from '~/public/images/about-logo.png';

export default function AboutStory() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl">
            <h3 className="h3 mb-3">Our story</h3>
            <p className="mb-8 text-lg text-gray-600">
              Aenean sed adipiscing diam donec adipiscing tristique risus nec
              feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu
              dictum varius duis at consectetur lorem donec massa sapien, sed
              risus ultricies tristique nulla aliquet. Morbi tristique senectus
              et netus et, nibh nisl condimentum id venenatis a condimentum
              vitae sapien.
            </p>
            <p className="mb-8 text-lg text-gray-600">
              Quam pellentesque nec nam aliquam sem et tortor consequat,
              pellentesque adipiscing commodo elit at imperdiet. Semper auctor
              neque vitae tempus quam pellentesque nec. Amet dictum sit amet
              justo donec enim diam varius sit amet mattis vulputate enim nulla
              aliquet porttitor.
            </p>
          </div>

          <div className="sm:flex">
            <figure className="mb-8 flex max-w-none shrink-0 sm:mb-0 sm:max-w-xs lg:max-w-none">
              <Image
                className="grow self-start rounded"
                src={AboutImage}
                width={435}
                height={326}
                alt="About us 02"
              />
            </figure>
            <div className="sm:ml-8 lg:ml-16">
              <h4 className="h4 mb-2">2017 - 2020</h4>
              <p className="mb-8 text-lg text-gray-600">
                Quam pellentesque nec nam aliquam sem et tortor consequat,
                pellentesque adipiscing commodo elit at imperdiet. Semper auctor
                neque vitae tempus quam pellentesque nec. Amet dictum sit amet
                justo donec enim diam varius sit amet mattis vulputate enim
                nulla aliquet porttitor.
              </p>
              <div className="mb-8 flex">
                <Image
                  className="mr-4 shrink-0 self-start rounded-full shadow-lg"
                  src={AboutLogo}
                  width={40}
                  height={40}
                  alt="Logo"
                />
                <div>
                  <blockquote className="italic text-gray-600">
                    “ I love this product and would recommend it to anyone.
                    Could be not easier to use, and our multiple websites are
                    wonderful. We get nice comments all the time. “
                  </blockquote>
                  <div className="mt-2 text-sm font-medium text-gray-600">
                    <cite className="not-italic text-gray-900">
                      Micheal Osman
                    </cite>{' '}
                    ·{' '}
                    <a className="text-blue-600" href="#0">
                      New York Times
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="text-lg text-gray-600">
              Aenean sed adipiscing diam donec adipiscing tristique risus nec
              feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu
              dictum varius duis at consectetur lorem donec massa sapien, sed
              risus ultricies tristique nulla aliquet. Morbi tristique senectus
              et netus et, nibh nisl condimentum id venenatis a condimentum
              vitae sapien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
