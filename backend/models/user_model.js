const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      //required: true,
      trim: true,
      minlength: 5,
      lowercase: true,
    },
    name: {
      type: String,
      // required: true,
      minlength: 5,
    },
    gender: {
      type: String,
      enum: ['M','F','T']
    },
    DOB: {
      type: String,
    },
    phone: {
      type: String,
      length: 10,
    },
    trainerRef: {
      type: mongoose.Types.ObjectId,
      ref: "Trainer",
    },
    sessions: {
      type: [mongoose.Types.ObjectId],
      ref: "Session",
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
module.exports = User;