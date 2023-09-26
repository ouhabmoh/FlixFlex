import passport from "../authentication/passport.js";

export const isAdmin = (req, res, next) => {
	passport.authenticate("jwt", { session: false }, (err, user) => {
		console.log(user);
		if (err) {
			console.log(err);
			return res.status(401).json({ message: "Unauthorized" });
		}
		if (!user) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		if (user.role !== "admin") {
			return res
				.status(403)
				.json({ message: "Forbidden - Admin access required" });
		}

		req.user = user;
		next();
	})(req, res, next);
};
