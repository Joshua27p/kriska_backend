const config = {
  PORT: process.env.PORT || 8081,
  LOGGER: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://mongokatu:katu@localhost:27888/kriskadev?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false'
};

module.exports = config;
