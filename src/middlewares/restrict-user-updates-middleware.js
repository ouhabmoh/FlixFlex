import { isObjEmpty } from "../utils/helpers.js";

// Define allowed fields for updating user profiles
export const restrictUserUpdates = (req, res, next) => {
	const allowedFields = ["username"];
	if (req.user.role === "admin") {
		allowedFields.push("role");
	}
	const updates = {};
	for (const key of Object.keys(req.body)) {
		if (req.body[key] !== "") {
			updates[key] = req.body[key];
		}
	}

	// Filter the request body to include only allowed fields
	const filteredData = Object.keys(updates)
		.filter((key) => allowedFields.includes(key))
		.reduce((obj, key) => {
			obj[key] = updates[key];
			return obj;
		}, {});
	console.log(filteredData);
	console.log(typeof filteredData);
	if (isObjEmpty(filteredData)) {
		return res.status(400).json({ message: "There is no updates" });
	}

	req.updates = filteredData;

	next();
};
