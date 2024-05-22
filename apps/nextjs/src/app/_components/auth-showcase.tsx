import { auth, signIn, signOut } from '@pbd/auth';
import { Button } from '@pbd/ui/button';

export async function AuthShowcase() {
  const session = await auth();

  if (!session) {
    return (
      <div className="flex flex-row gap-2">
        <form>
          <Button
            className="rounded-full"
            size="sm"
            formAction={async () => {
              'use server';
              await signIn('discord');
            }}
          >
            Sign in with Discord
          </Button>
        </form>
        <form>
          <Button
            className="rounded-full"
            size="sm"
            formAction={async () => {
              'use server';
              await signIn('google');
            }}
          >
            Sign in with Google
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        Logged in as
        <span className="font-semibold text-primary"> {session.user.name}</span>
      </p>

      <form>
        <Button
          className="rounded-full"
          size="sm"
          formAction={async () => {
            'use server';
            await signOut();
          }}
        >
          Sign out
        </Button>
      </form>
    </div>
  );
}
