import { body } from "express-validator";

export const favoriteValidationRules = () => {
	return [
		body("mediaId")
			.notEmpty()
			.withMessage("mediaId is required")
			.isInt({ min: 1 })
			.withMessage("mediaId must be a positive integer"),

		body("mediaType")
			.notEmpty()
			.withMessage("mediaType is required")
			.isIn(["movie", "serie"])
			.withMessage("mediaType must be either 'movie' or 'serie'"),
	];
};
