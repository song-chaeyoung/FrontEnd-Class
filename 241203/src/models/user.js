import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    trim: String,
    required: true,
  },
  password: {
    type: String,
    trim: String,
    required: true,
  },
  name: {
    type: String,
    trim: String,
    required: true,
  },
  location: {
    type: String,
    trim: String,
    required: true,
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);

export default User;
