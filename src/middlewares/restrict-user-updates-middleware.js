// Define allowed fields for updating user profiles
const allowedFields = ["username"];

export const restrictUserUpdates = (req, res, next) => {
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
			obj[key] = value[key];
			return obj;
		}, {});

	req.updates = filteredData;

	next();
};
