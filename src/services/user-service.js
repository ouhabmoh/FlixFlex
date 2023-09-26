import User from "../models/User.js";

class UserService {
	async getUsers() {
		return await User.find().select("_id email username role");
	}

	async getUser(id) {
		return await User.findById(id).select(" _id email username role");
	}

	async checkEmailOrUsernameExists(email, username) {
		return await User.findOne({
			$or: [{ email }, { username }],
		});
	}

	async createUser(user) {
		try {
			const { email, username, password } = user;

			// Check if email or username already exists
			const existingUser = await this.checkEmailOrUsernameExists(
				email,
				username
			);

			if (existingUser) return false;

			// Create a new user
			const newUser = await User.register(
				new User({
					email,
					username,
				}),
				password
			);
			// Return only the desired fields
			const {
				_id,
				email: userEmail,
				username: userUsername,
			} = newUser;
			return { _id, email: userEmail, username: userUsername };
		} catch (error) {
			throw new Error("Failed to create user: " + error.message);
		}
	}

	async updateUser(id, user) {
		return await User.findByIdAndUpdate(id, user);
	}

	async deleteUser(id) {
		return await User.findByIdAndDelete(id);
	}
}

export default new UserService();
