console.log('NODE_ENV: ', process.env.NODE_ENV)
console.log('DATABASE_URL: ', process.env.DATABASE_URL)

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/publications',
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds/dev',
    },
    useNullAsDefault: true,
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: './db/migrations',
    },
    useNullAsDefault: true,
  },
  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/publications',
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/test/seeds',
    },
  },
}
