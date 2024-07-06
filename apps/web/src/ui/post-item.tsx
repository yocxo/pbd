import Image from 'next/image';
import Link from 'next/link';

export default function PostItem({ ...props }) {
  return (
    <article className="pl-6 sm:pl-10">
      <header className="mb-2">
        <div className="relative mb-2 flex items-center gap-2 before:absolute before:inset-y-0 before:-left-6 before:-ml-px before:w-px before:bg-blue-500 sm:before:-left-10">
          <Image
            className="rounded-full"
            src={props.metadata.authorImg}
            width="24"
            height="24"
            alt={props.metadata.author}
          />
          <div className="text-sm text-gray-500">{props.metadata.author}</div>
        </div>
        <h2 className="text-2xl font-bold">
          <Link href={`/blog/${props.slug}`} className="hover:underline">
            {props.metadata.title}
          </Link>
        </h2>
      </header>
      <p className="mb-4 text-gray-700">{props.metadata.summary}</p>
      <footer>
        <Link
          className="text-sm font-medium text-blue-500 transition-colors hover:text-blue-600"
          href={`/blog/${props.slug}`}
        >
          Read more <span className="tracking-normal text-blue-300">-&gt;</span>
        </Link>
      </footer>
    </article>
  );
}
