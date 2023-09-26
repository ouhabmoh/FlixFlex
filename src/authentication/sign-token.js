import jwt from "jsonwebtoken";

// Function to sign and generate a JWT token based on user information
const signToken = (user) => {
	return new Promise((resolve, reject) => {
		const tokenPayload = {
			_id: user._id,
			email: user.email,
			username: user.username,
			role: user.role,
		};

		jwt.sign(
			{ user: tokenPayload },
			process.env.JWT_SECRET_KEY,
			{ expiresIn: process.env.TOKEN_EXPIRATION_TIME },
			(err, token) => {
				if (err) {
					reject(err);
				} else {
					resolve(token);
				}
			}
		);
	});
};

export default signToken;
