import { DefaultAuthProvider } from 'adminjs';
import bcrypt from 'bcrypt';
import componentLoader from './component-loader.js';
import { User } from '../models/users.js';

const provider = new DefaultAuthProvider({
  componentLoader,
  authenticate: async ({ email, password }) => {
    const adminUser = await User.findOne({ email });
    if (adminUser && (await bcrypt.compare(password, adminUser.password))) {
      if (adminUser.role === 'Admin' || adminUser.role === 'Superadmin') {
        return {
          email: adminUser.email,
          role: adminUser.role,
          firstName: adminUser.firstName,
          surname: adminUser.surname,
        };
      }
    }

    return null;
  },
});

export default provider;
