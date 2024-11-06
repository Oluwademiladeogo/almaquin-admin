import { User } from '../../models/users.js';
import crypto from 'crypto';
import { sendMagicLink } from '../../helpers/email.js';

export default {
  resource: User,
  options: {
    properties: {
      email: {
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
      password: { isVisible: false },
      otp: { isVisible: false },
      isVerified: { isVisible: false },
      resetPasswordToken: { isVisible: false },
      resetPasswordExpires: { isVisible: false },
      role: { isVisible: { list: true, filter: true, show: true, edit: true } },
    },
    actions: {
      new: {
        before: async (request, context) => {
          if (request.payload && request.payload.email) {
            const email = request.payload.email;
            const phoneNo = request.payload.phoneNo;
            const role = request.payload.role;
            const surname = request.payload.surname;
            const firstName = request.payload.firstName;
            const birthday = request.payload.birthday;
            const schoolLocation = request.payload.schoolLocation;
            const reasonForJoining = request.payload.reasonForJoining;
            const classLevel = request.payload.classLevel;
            const presentSchool = request.payload.presentSchool;
            let user = new User({
              email,
              phoneNo,
              role,
              surname,
              firstName,
              birthday,
              schoolLocation,
              reasonForJoining,
              classLevel,
              presentSchool,
            });
            // await user.save();

            const token = crypto.randomBytes(20).toString('hex');
            const expires = Date.now() + 3600000; // 1 hour
            user.resetPasswordToken = token;
            user.resetPasswordExpires = new Date(expires);
            // await user.save();
            await sendMagicLink(email, token);
          }
          return request;
        },
      },
      edit: {
        isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'Superadmin',
      },
      delete: {
        isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'Superadmin',
      },
      list: {
        isAccessible: ({ currentAdmin }) => currentAdmin && ['Superadmin', 'Admin'].includes(currentAdmin.role),
      },
      show: {
        isAccessible: ({ currentAdmin }) => currentAdmin && ['Superadmin', 'Admin'].includes(currentAdmin.role),
      },
      bulkDelete: {
        isAccessible: () => false,
      },
      bulkEdit: {
        isAccessible: () => false,
      },
    },
  },
};
