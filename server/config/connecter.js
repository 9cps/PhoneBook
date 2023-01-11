const mysql = require('mysql2');
var CONFIG = require('../config/config.json');

exports.CONNECTION_SQL = mysql.createConnection({
    host: CONFIG.development.host,
    user: CONFIG.development.username,
    password: CONFIG.development.password,
    database: CONFIG.development.database
});
