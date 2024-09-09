module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      // uncomment the following lines if you are using SSL or remote database
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL', false),
      },
    },
    debug: false,
  },
});