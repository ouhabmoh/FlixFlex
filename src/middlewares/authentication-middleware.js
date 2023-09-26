import passport from "../authentication/passport.js";

export const isLoggedIn = (req, res, next) => {
	passport.authenticate("jwt", { session: false }, (err, user) => {
		if (err || !user) {
			// If authentication fails, you can handle the error or respond with an unauthorized status code
			return res
				.status(401)
				.json({ error: "Invalid token or token expired" });
		}
		// If authentication is successful, store the authenticated user in the request object

		req.user = user;

		next();
	})(req, res, next);
};

export const isNotLoggedIn = (req, res, next) => {
	passport.authenticate("jwt", { session: false }, (err, user) => {
		if (user) {
			return res
				.status(409)
				.json({ error: "You are already logged in" });
		}
		// If authentication is successful, store the authenticated user in the request object

		next();
	})(req, res, next);
};
