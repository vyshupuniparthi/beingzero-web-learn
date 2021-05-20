module.exports = {
    mongoConnectionString: process.env.MONGO_CONNECTION_STRING || '',
    //heroku sets port environment variable automatically
    //webPort: process.env.PORT || 3000
}