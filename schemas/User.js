import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  domains: [{ type: Number }],
});

const User = mongoose.model('User', UserSchema);

export default User;