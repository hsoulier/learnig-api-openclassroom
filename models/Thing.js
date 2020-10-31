const mongoose = require("mongoose")

const thingSchema = mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  imageUrl: { type: String, require: true },
  userId: { type: String, require: true },
  prince: { type: Number, require: true },
})

module.exports = mongoose.model("Thing", thingSchema)
