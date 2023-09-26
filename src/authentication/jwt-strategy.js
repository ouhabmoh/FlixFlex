import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import passport from "passport";

import dotenv from "dotenv";
dotenv.config();

// Configure and use Passport's JWT strategy
passport.use(
	new JwtStrategy(
		{
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.JWT_SECRET_KEY,
		},
		async (jwtPayload, done) => {
			try {
				// Extract user
				const user = jwtPayload.user;
				done(null, user);
			} catch (error) {
				done(error, false);
			}
		}
	)
);
