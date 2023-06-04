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
    },
    getByID: (id) => {
        return new Promise((accepted, rejected) => {
            db.query('SELECT * FROM cars WHERE id = ?', [id], (error, results) => {
                if (error) {
                    rejected(error);
                    return;
                }
                if (results.length > 0) {
                    accepted(results[0]);
                } else {
                    accepted(false);
                }
            });

        })
    },
};