    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'aws-0-ap-southeast-1.pooler.supabase.com'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'postgres'),
          user: env('DATABASE_USERNAME', 'postgres.wfgphbfbxvmrjqmedmmm'),
          password: env('DATABASE_PASSWORD', 'OgtuedwFDeERC0jq'),
          schema: env('DATABASE_SCHEMA', 'public'), // Not required
          ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
          },
        },
        debug: false,
        
      },
    });