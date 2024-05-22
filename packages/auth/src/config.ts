import type { DefaultSession, NextAuthConfig } from 'next-auth';

import { DrizzleAdapter } from '@auth/drizzle-adapter';
import Discord from 'next-auth/providers/discord';

import { db } from '@pbd/db/client';
import { Account, Session, User } from '@pbd/db/schema';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

export const authConfig = {
  adapter: DrizzleAdapter(db, {
    usersTable: User,
    accountsTable: Account,
    sessionsTable: Session,
  }),
  providers: [Discord],
  callbacks: {
    session: (opts) => {
      if (!('user' in opts)) throw 'unreachable with session strategy';

      return {
        ...opts.session,
        user: {
          ...opts.session.user,
          id: opts.user.id,
        },
      };
    },
  },
} satisfies NextAuthConfig;
