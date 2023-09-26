import { body } from "express-validator";

export const loginValidationRules = () => {
	return [
		body("username")
			.bail()
			.notEmpty() // Username
			.withMessage("Username is required")
			.isString()
			.withMessage("Username must be a string")
			.isLength({ min: 3, max: 100 })
			.withMessage("Username must be between 3 and 100 characters"),

		body("password")
			.bail()
			.notEmpty()
			.withMessage("Password is required")
			.isString()
			.withMessage("Password must be a string"),
	];
};

export const registerValidationRules = () => {
	return [
		body("email")
			.notEmpty()
			.withMessage("Email is required")
			.isEmail()
			.withMessage("Invalid email format"),

		body("username")
			.notEmpty()
			.withMessage("Username is required")
			.isString()
			.withMessage("Username must be a string")
			.isLength({ min: 3, max: 100 })
			.withMessage("Username must be between 3 and 100 characters"),

		body("password")
			.notEmpty()
			.withMessage("Password is required")
			.isString()
			.withMessage("Password must be a string")
			.isLength({ min: 8 })
			.withMessage("Password must be at least 8 characters long"),
	];
};
