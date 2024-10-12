const mysql = require('mysql');
const fs = require('fs');

function newConnection() {
    let host = 'localhost';
    const user = 'root';
    const pass = '1620';
    const db = 'bloodbridge_db';

    if (isDocker()) {
        host = 'mysql';
    }

    const connection = mysql.createConnection({
        host: host,
        password: pass,
        database: db
    });

    connection.connect((err) => {
        if (err) {
            console.error('Connection failed: ' + err.stack);
            return;
        }
        console.log('Connected as id ' + connection.threadId);
    });

    return connection;
}

function isDocker() {
    return fs.existsSync('/.dockerenv');
}

module.exports = { newConnection, isDocker };