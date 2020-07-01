const monk = require('monk')

module.exports = monk('localhost/ead')




// const dbId = process.env.APP_DB
// const dbUser = process.env.APP_DB_USER
// const dbPassword = process.env.APP_DB_PASSWORD
// const dbHost = process.env.APP_DB_HOST
// const dbPort = process.env.APP_DB_PORT
// const dbName = process.env.APP_DB_NAME
// const url = `${dbId}://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`