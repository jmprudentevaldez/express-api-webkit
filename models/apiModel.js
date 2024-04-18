const mongoose = require("mongoose");

const apiSchema = mongoose.Schema(
  {
    method: {
      type: String,
      required: [true, "Please select the HTTP method"],
      enum: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    },
    description: {
      type: String,
      required: [true, "Please enter the API description"],
    },
    endpoint: {
      type: String,
      required: [true, "Please enter the API endpoint"],
      unique: true,
    },
    systemname: {
      type: String,
      required: [true, "Please enter the system name"],
    },
  },
  {
    timestamps: true,
  }
);

apiSchema.index({ endpoint: 1 });

const Apis = mongoose.model("Api", apiSchema);

module.exports = Apis;
