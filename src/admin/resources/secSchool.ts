import { SecSchool } from '../../models/secSchool.js';

export default {
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
};
