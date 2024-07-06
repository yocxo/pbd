import Link from 'next/link';

export default function PageNavigation({
  prevArticle,
  nextArticle,
}: {
  prevArticle: { slug: string; metadata: { title: string } } | null;
  nextArticle: { slug: string; metadata: { title: string } } | null;
}) {
  return (
    <div className="items-center justify-between space-y-6 py-6 text-center sm:flex sm:space-x-4 sm:space-y-0">
      {/* Prev link */}
      {prevArticle && (
        <div className="flex-col items-start sm:flex sm:w-1/2">
          <Link className="group font-medium" href={prevArticle.slug}>
            <span className="tracking-normal text-gray-400">&lt;-</span>{' '}
            <span className="text-gray-700 transition group-hover:text-gray-900">
              {prevArticle.metadata.title}
            </span>
          </Link>
        </div>
      )}
      {/* Next link */}
      {nextArticle && (
        <div className="ml-auto flex-col items-end sm:flex sm:w-1/2">
          <Link className="group font-medium" href={nextArticle.slug}>
            <span className="text-gray-700 transition group-hover:text-gray-900">
              {nextArticle.metadata.title}
            </span>{' '}
            <span className="tracking-normal text-gray-400">-&gt;</span>
          </Link>
        </div>
      )}
    </div>
  );
}
