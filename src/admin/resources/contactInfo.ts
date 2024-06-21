import { ContactInfo } from '../../models/contactInfo.js';

export default {
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
};
