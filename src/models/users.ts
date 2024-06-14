import mongoose, { Document } from 'mongoose';
import { IUserDoc } from '../types/types.js';
import { getHashedPassword } from '../helpers/hashPassword.js';

const UserSchema = new mongoose.Schema<IUserDoc>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNo: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
  role: {
    type: String,
    enum: ['User', 'Admin', 'Superadmin'],
    default: 'User',
  },
  surname: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  presentSchool: {
    type: String,
    required: true,
  },
  schoolLocation: {
    type: String,
    required: true,
  },
  classLevel: {
    type: String,
    required: true,
  },
  reasonForJoining: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

UserSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    const value: any = await getHashedPassword(this.password);
    this.password = value.hashedPassword;
  }
  this.email = this.email.toLowerCase();
  next();
});

export const User = mongoose.model<IUserDoc>('Users', UserSchema);
