import componentLoader from './component-loader.js';
import initialize from 'src/db/index.js';
const db = await initialize();
const options = {
    componentLoader,
    rootPath: '/admin',
    resources: [],
    databases: [db],
};
export default options;
