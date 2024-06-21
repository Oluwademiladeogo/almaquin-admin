import { News } from '../../models/news.js';

export default {
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
};
