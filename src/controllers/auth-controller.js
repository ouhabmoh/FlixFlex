import passport from "../authentication/passport.js";
import signToken from "../authentication/sign-token.js";

//This is a simple authentification system with only register and login,
// there is a lot of improvements needed ( email confirmation, password reset, refresh token….)

export const login = (req, res, next) => {
	passport.authenticate("local-login", async (err, user, info) => {
		try {
			if (err) {
				return next(err);
			}
			if (!user) {
				return res.status(400).json({ message: info.message });
			}
			const token = await signToken(user);
			sendResponse(res, 200, token);
		} catch (error) {
			next(error);
		}
	})(req, res, next);
};

export const register = (req, res, next) => {
	passport.authenticate("local-register", async (err, user, info) => {
		try {
			if (err) {
				return next(err);
			}
			if (!user) {
				return res.status(400).json({ message: info.message });
			}
			const token = await signToken(user);
			sendResponse(res, 201, token);
		} catch (error) {
			next(error);
		}
	})(req, res, next);
};

const sendResponse = (res, status, token) => {
	res.status(status).json({
		token,
	});
};
