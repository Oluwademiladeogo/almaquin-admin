import argon2 from 'argon2';

import {User} from '../src/models/users.js';
import componentLoader from '../src/admin/component-loader.js';

const adminJsOptions = {
  resources: [
    {
      resource: User,
      options: {
        //...your regular options go here'
        properties: { password: { isVisible: false } },
      },
      features: [
      //   passwordsFeature({
      //     componentLoader,
      //     properties: {
      //       encryptedPassword: 'password',
      //       password: 'newPassword'
      //     },
      //     hash: argon2.hash,
      // })
      ]
    },
  ],
  //...
}