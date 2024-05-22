'use client';

import { use } from 'react';

import type { RouterOutputs } from '@pbd/api';
import { CreatePostSchema } from '@pbd/db/schema';
import { Button } from '@pbd/ui/button';
import { Card } from '@pbd/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  useForm,
} from '@pbd/ui/form';
import { Input } from '@pbd/ui/input';
import { toast } from '@pbd/ui/toast';

import { api } from '#/trpc/react';

export function CreatePostForm() {
  const form = useForm({
    schema: CreatePostSchema,
    defaultValues: {
      content: '',
      title: '',
    },
  });

  const utils = api.useUtils();
  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      form.reset();
      await utils.post.invalidate();
    },
    onError: (err) => {
      toast.error(
        err.data?.code === 'UNAUTHORIZED'
          ? 'You must be logged in to post'
          : 'Failed to create post',
      );
    },
  });

  return (
    <Form {...form}>
      <form
        className="flex w-full max-w-2xl flex-col gap-4"
        onSubmit={form.handleSubmit((data) => {
          createPost.mutate(data);
        })}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Title" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Content" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Create</Button>
      </form>
    </Form>
  );
}

export function PostList(props: {
  posts: Promise<RouterOutputs['post']['all']>;
}) {
  // TODO: Make `useSuspenseQuery` work without having to pass a promise from RSC
  const initialData = use(props.posts);
  const { data: posts } = api.post.all.useQuery(undefined, {
    initialData,
  });

  if (posts.length === 0) {
    return (
      <div className="relative flex w-full flex-col gap-4 p-4">
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />

        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-md border bg-black/10">
          <p className="text-3xl text-foreground">No posts yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {posts.map((p) => {
        return <PostCard key={p.id} post={p} />;
      })}
    </div>
  );
}

export function PostCard(props: {
  post: RouterOutputs['post']['all'][number];
}) {
  const utils = api.useUtils();
  const deletePost = api.post.delete.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();
    },
    onError: (err) => {
      toast.error(
        err.data?.code === 'UNAUTHORIZED'
          ? 'You must be logged in to delete a post'
          : 'Failed to delete post',
      );
    },
  });

  return (
    <Card className="flex w-full max-w-3xl items-center justify-between p-4">
      <div className="flex flex-col items-start">
        <h2 className="text-lg font-semibold text-foreground">
          {props.post.title}
        </h2>
        <p className="mt-2 text-muted-foreground">{props.post.content}</p>
      </div>
      <Button
        className="text-destructive hover:text-secondary-foreground"
        variant="ghost"
        onClick={() => deletePost.mutate(props.post.id)}
      >
        <TrashIcon className="h-5 w-5" />
      </Button>
    </Card>
  );
}

export function PostCardSkeleton() {
  return (
    <div className="flex w-full max-w-3xl animate-pulse items-center justify-between rounded-md bg-card p-4 shadow-sm">
      <div className="flex flex-col items-start space-y-2">
        <div className="h-5 w-48 rounded-md bg-muted" />
        <div className="h-4 w-72 rounded-md bg-muted" />
      </div>
      <div className="h-8 w-8 rounded-full bg-muted" />
    </div>
  );
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
