import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { CustomMDX } from '#/ui/mdx/mdx';
import { getBlogPosts } from '#/ui/mdx/utils';
import Newsletter from '#/ui/newsletter';
import PostDate from '#/ui/post-date';
import PostNav from './post-nav';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const { title, summary: description } = post.metadata;

  return {
    title,
    description,
  };
}

export default async function SinglePost({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) notFound();

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex justify-between pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Left content */}
          <div className="max-w-3xl">
            <article>
              {/* Section header */}
              <header className="pb-8">
                <div className="mb-6">
                  <Link
                    className="text-sm font-medium text-blue-500 transition-colors hover:text-blue-600"
                    href="/blog"
                  >
                    <span className="tracking-normal text-blue-300">&lt;-</span>{' '}
                    Back To Blog
                  </Link>
                </div>
                <h1 className="mb-5 text-5xl font-bold">
                  {post.metadata.title}
                </h1>
                <div className="flex items-center gap-3">
                  <img
                    className="rounded-full"
                    src={post.metadata.authorImg}
                    width={32}
                    height={32}
                    alt={post.metadata.author}
                  />
                  <div className="text-sm text-gray-500">
                    {post.metadata.author} ·{' '}
                    <span className="text-gray-700">
                      <PostDate dateString={post.metadata.publishedAt} />
                    </span>
                  </div>
                </div>
              </header>
              <div className="prose max-w-prose text-gray-700 prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:font-medium prose-blockquote:italic prose-blockquote:text-gray-900 prose-strong:font-medium prose-strong:text-gray-900 prose-code:rounded prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-gray-900 prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:border prose-pre:border-gray-700 prose-pre:bg-gray-900 prose-blockquote:xl:-ml-4">
                <CustomMDX source={post.content} />
              </div>
            </article>
            {/* Newsletter form */}
            <Newsletter />
          </div>
          {/* Right sidebar */}
          <PostNav />
        </div>
      </div>
    </section>
  );
}
