const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'quarantine'
});

conn.connect((err) => {
    if(err) throw err;
});

module.exports = conn;