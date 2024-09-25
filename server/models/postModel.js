const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: { type: String, required: true },
  category: {
    type: String,
    enum: [
      "Snacks",
      "Lunch",
      "Dinner",
      "Brunch",
      "SouthIndian",
      "Continental",
      "Italian",
      "NonVeg",
    ],
    message: "VALUE IS OT SUPPORTED",
  },
  description: { type: String, required: true },
  // image: {type: String, required: true},
  creator: { type: Schema.Types.ObjectId, ref: 'User'},
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
}, {timestamps: true});



module.exports = model("Posts", postSchema)