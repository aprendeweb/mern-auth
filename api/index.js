require('dotenv').config();
const { validateEnv } = require('./utils/environment');
const { mongoHelpers } = require('./helpers');

const envs = ['PORT', 'MONGO_URI', 'SALT_ROUNDS', 'JWT_SECRET'];
validateEnv(envs);

(async () => {
  await mongoHelpers.connectToDatabase();
  require('./server');
})();
