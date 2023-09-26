import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import userService from "../services/user-service.js";
import dotenv from "dotenv";
dotenv.config();

passport.use(
	"local-register",
	new LocalStrategy(
		{
			usernameField: "username",
			passwordField: "password",
			passReqToCallback: true,
		},

		async function (req, username, password, done) {
			try {
				const email = req.body.email;

				const newUser = await userService.createUser({
					email,
					username,
					password,
				});
				if (newUser) {
					return done(null, newUser);
				}

				return done(null, false, {
					message: "Email/username is already taken.",
				});
			} catch (error) {
				return done(error);
			}
		}
	)
);
