const validateEnv = (envs) => {
  for (const env of envs) {
    if (!process.env[env])
      throw new Error(`${env} must be definend in .env file`);
  }
};

module.exports = { validateEnv };
