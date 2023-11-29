export default () => ({
  JWT_SECRET: process.env.JWT_SECRET || 'SOME_SECRET_KEY_1!2@3#',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
});
