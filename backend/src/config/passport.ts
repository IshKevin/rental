import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { db } from '../db';
import { users, User } from '../db/schema';
import { eq } from 'drizzle-orm';


passport.serializeUser((user: User, done) => {
  done(null, user.id);
})
passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await db.select().from(users).where(eq(users.id, id));
    done(null, user[0]);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await db
          .select()
          .from(users)
          .where(eq(users.googleId, profile.id));

        if (existingUser.length) {
          return done(null, existingUser[0]);
        }

        const newUser = await db
          .insert(users)
          .values({
            googleId: profile.id,
            email: profile.emails![0].value,
            displayName: profile.displayName,
            role: 'renter',
          })
          .returning();

        return done(null, newUser[0]);
      } catch (error) {
        return done(error as Error, undefined);
      }
    }
  )
);

export default passport;