const redis = require('redis');
require('dotenv').config();

const client = redis.createClient({
    url: process.env.REDIS_URI
});

client.on('connect', () => console.log('Redis connected'));
client.on('error', (err) => console.error('Redis error:', err));

module.exports = client;
