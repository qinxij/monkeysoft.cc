const isDev = process.env.NODE_ENV === 'development';
const isLocal = process.env.DEV_LOCAL === 'local';

module.exports = {
  isDev,
  isLocal,
  host: isDev ? (isLocal ? 'localhost' : 'monkeysoft.cc') : 'monkeysoft.cc',
  port: isDev ? (isLocal ? 8000 : 7999) : 80,
  sport: isDev ? (isLocal ? 0 : 8000) : 443,
  homeURL: isDev ? (isLocal ? 'http://localhost:8000' : 'https://monkeysoft.cc:8000') : 'https://monkeysoft.cc'
};
