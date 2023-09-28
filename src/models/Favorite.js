import mongoose from "mongoose";

const { Schema } = mongoose;

const favoriteSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	mediaId: {
		type: Number,
		required: true,
	},
	mediaType: {
		type: String,
		enum: ["movie", "serie"],
		required: true,
	},
});

// Define a unique compound index on userId, mediaId, and mediaType
favoriteSchema.index({ userId: 1, mediaId: 1, mediaType: 1 }, { unique: true });

const Favorite = mongoose.model("Favorite", favoriteSchema);

export default Favorite;
