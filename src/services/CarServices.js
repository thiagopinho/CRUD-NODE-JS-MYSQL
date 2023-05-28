const db = require("../db");

module.exports = {
    getAll: () => {
        return new Promise((accepted, rejected) => {
            db.query('SELECT * FROM cars', (error, results) => {
                if (error) {
                    rejected(error);
                    return;
                }
                accepted(results);
            });
        })
    }
};