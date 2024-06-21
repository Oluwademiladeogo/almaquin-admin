import AdminJS from 'adminjs';
import { buildAuthenticatedRouter } from '@adminjs/express';
import provider from '../admin/auth-provider.js';
import usersResource from '../admin/resources/users.js';
import contactInfoResource from '../admin/resources/contactInfo.js';
import secSchoolResource from '../admin/resources/secSchool.js';
import universityResource from '../admin/resources/university.js';
import newsResource from '../admin/resources/news.js';

const admin = new AdminJS({
  resources: [
    usersResource,
    contactInfoResource,
    secSchoolResource,
    universityResource,
    newsResource,
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

export { admin, router };
