import User from "../models/User.js";

class UserService {
	async getUsers() {
		return await User.find().select("_id username role");
	}

	async getUser(id) {
		return await User.findById(id).select(" _id username role");
	}

	async checkIfUsernameExists(email, username) {
		return await User.findOne({
			username,
		});
	}

	async createUser(user) {
		try {
			const { username, password } = user;

			// Check if email or username already exists
			const existingUser = await this.checkIfUsernameExists(username);

			if (existingUser) return false;

			// Create a new user
			const newUser = await User.register(
				new User({
					username,
				}),
				password
			);

			return { _id: newUser._id, username, role: newUser.role };
		} catch (error) {
			throw new Error("Failed to create user: " + error.message);
		}
	}

	// Function to update a user with username validation
	async updateUser(id, updatedUserData) {
		try {
			if (updatedUserData.username) {
				// Check if the updated username already exists in the database
				const usernameExists = await User.findOne({
					username: updatedUserData.username,
					_id: { $ne: id }, // Exclude the current user's ID from the search
				});

				if (usernameExists) {
					throw new Error("Username already exists");
				}
			}
			// Update the user data
			const updatedUser = await User.findByIdAndUpdate(
				id,
				updatedUserData,
				{
					new: true, // Return the updated document
				}
			);

			return updatedUser;
		} catch (error) {
			throw new Error("Unable to update user: " + error.message);
		}
	}

	async changePassword(userId, oldPassword, newPassword) {
		try {
			// Find the user by their ID
			const user = await User.findById(userId);

			// If the user doesn't exist
			if (!user) {
				return { success: false, message: "User not found" };
			}

			// Change the password using Passport-Local-Mongoose's changePassword method
			await user.changePassword(oldPassword, newPassword);

			return {
				success: true,
				message: "Password changed successfully",
			};
		} catch (error) {
			console.error(error);
			return { success: false, message: "Password change failed" };
		}
	}

	async deleteUser(id) {
		return await User.findByIdAndDelete(id);
	}
}

export default new UserService();
