import express from 'express';
import AdminJS from 'adminjs';
import { buildAuthenticatedRouter } from '@adminjs/express';
import provider from './admin/auth-provider.js';
import initializeDb from './db/index.js';
import { ContactInfo } from './models/contactInfo.js';
import { User } from './models/users.js';
import { SecSchool } from './models/secSchool.js';
import { University } from './models/university.js';
import { News } from './models/news.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

const port = process.env.PORT || 8000;

const sendMagicLink = async (email: string, token: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Password Reset',
      text: `You requested a password reset. Click the link to reset your password: ${resetLink}`,
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error('Error sending magic link:', error);
    return { success: false, status: 500, message: 'Error sending magic link' };
  }
};

const start = async () => {
  const app = express();

  await initializeDb();

  const admin = new AdminJS({
    resources: [
      {
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
                  const token = crypto.randomBytes(20).toString('hex');
                  await sendMagicLink(request.payload.email, token);
                  const email = request.payload.email;
                  const user = await User.findOne({ email });
                  const expires = Date.now() + 3600000; // 1 hour
                  user.resetPasswordToken = token;
                  user.resetPasswordExpires = new Date(expires);
                  await user.save();
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
              isAccessible: ({ currentAdmin }) => currentAdmin && ['Superadmin', 'Admin'],
            },
            show: {
              isAccessible: ({ currentAdmin }) => currentAdmin && ['Superadmin', 'Admin'],
            },
            bulkDelete: {
              isAccessible: () => false,
            },
            bulkEdit: {
              isAccessible: () => false,
            },
          },
        },
      },
      {
        resource: ContactInfo,
        options: {
          actions: {
            bulkDelete: {
              isAccessible: () => false,
            },
            bulkEdit: {
              isAccessible: () => false,
            },
          },
        },
      },
      {
        resource: SecSchool,
        options: {
          actions: {
            bulkDelete: {
              isAccessible: () => false,
            },
            bulkEdit: {
              isAccessible: () => false,
            },
          },
        },
      },
      {
        resource: University,
        options: {
          properties: {
            pageCreator: {
              isVisible: { list: true, filter: true, show: true, edit: false },
            },
            lastUpdatedBy: {
              isVisible: { list: true, filter: true, show: true, edit: false },
            },
            dateAdded: {
              isVisible: { list: true, filter: true, show: true, edit: false },
            },
            dateModified: {
              isVisible: { list: true, filter: true, show: true, edit: false },
            },
          },
          actions: {
            new: {
              before: async (request, context) => {
                if (request.payload && context.currentAdmin) {
                  request.payload.pageCreator = `${context.currentAdmin.firstName} ${context.currentAdmin.surname}`;
                }
                return request;
              },
            },
            edit: {
              before: async (request, context) => {
                if (request.payload && context.currentAdmin) {
                  request.payload.lastUpdatedBy = `${context.currentAdmin.firstName} ${context.currentAdmin.surname}`;
                }
                return request;
              },
            },
            delete: {
              isAccessible: () => false,
            },
            bulkDelete: {
              isAccessible: () => false,
            },
            bulkEdit: {
              isAccessible: () => false,
            },
          },
        },
      },
      {
        resource: News,
        options: {
          properties: {
            author: {
              isVisible: { list: true, filter: true, show: true, edit: false },
            },
            lastUpdatedBy: {
              isVisible: { list: true, filter: true, show: true, edit: false },
            },
            dateAdded: {
              isVisible: { list: true, filter: true, show: true, edit: false },
            },
            dateModified: {
              isVisible: { list: true, filter: true, show: true, edit: false },
            },
          },
          actions: {
            new: {
              before: async (request, context) => {
                if (request.payload && context.currentAdmin) {
                  request.payload.author = `${context.currentAdmin.firstName} ${context.currentAdmin.surname}`;
                }
                return request;
              },
            },
            edit: {
              before: async (request, context) => {
                if (request.payload && context.currentAdmin) {
                  request.payload.lastUpdatedBy = `${context.currentAdmin.firstName} ${context.currentAdmin.surname}`;
                }
                return request;
              },
            },
            bulkDelete: {
              isAccessible: () => false,
            },
            bulkEdit: {
              isAccessible: () => false,
            },
          },
        },
      },
    ],
    branding: {
      logo: false,
      companyName: 'Almaquin',
      withMadeWithLove: false,
    },
  });

  const router = buildAuthenticatedRouter(
    admin,
    {
      cookiePassword: process.env.COOKIE_SECRET,
      cookieName: 'adminjs',
      provider,
    },
    null,
    {
      secret: process.env.COOKIE_SECRET,
      saveUninitialized: true,
      resave: true,
    }
  );

  app.use(admin.options.rootPath, router);

  app.listen(port, () => {
    console.log(`AdminJS available at http://localhost:${port}${admin.options.rootPath}`);
  });
};

start();
