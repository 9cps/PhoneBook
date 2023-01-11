const connection = require('../config/connecter');

exports.GET_FREIENDS_BY_NAME = function(keyword) {
    return new Promise((resolve, reject) => {
        connection.CONNECTION_SQL.query(
            `SELECT * FROM MyFriends WHERE first_name LIKE '%${keyword}%' OR last_name LIKE '%${keyword}%'`,
            (err, rows) => {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            }
        );
    });
}
